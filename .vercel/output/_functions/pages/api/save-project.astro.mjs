import { s as supabase } from '../../chunks/supabase_DdrpAs7p.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, ...projectData } = body;
    let error;
    if (id) {
      const { error: updateError } = await supabase.from("projects").update(projectData).eq("id", id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from("projects").insert([projectData]);
      error = insertError;
    }
    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving project:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
