/* empty css                                    */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dx_paOlX.mjs';
import { s as supabase } from '../../chunks/supabase_DdrpAs7p.mjs';
import { marked } from 'marked';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: projects } = await supabase.from("projects").select("slug");
  return projects?.map((p) => ({ params: { slug: p.slug } })) || [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: project, error } = await supabase.from("projects").select("*").eq("slug", slug).single();
  if (error || !project) {
    return Astro2.redirect("/404");
  }
  const contentHtml = marked.parse(project.content || "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.seo_title || project.name} - Masanawa` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-brand-purple/90 to-brand-teal/90 z-10"></div> <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0"></div> <div class="relative z-20 max-w-4xl mx-auto text-center"> <div class="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center text-4xl font-bold shadow-2xl"${addAttribute(`background-color: ${project.icon_color}`, "style")}> ${project.icon_letter} </div> <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">${project.name}</h1> <p class="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">${project.description}</p> ${project.url && renderTemplate`<div class="mt-10"> <a${addAttribute(project.url, "href")} target="_blank" class="inline-flex items-center gap-2 bg-white text-brand-purple px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
Visit Website
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> </a> </div>`} </div> </div>  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <article class="prose prose-lg prose-purple mx-auto"> <div>${unescapeHTML(contentHtml)}</div> </article> <div class="mt-16 pt-8 border-t border-gray-200 text-center"> <a href="/" class="text-brand-purple font-bold hover:text-brand-dark flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
Back to Projects
</a> </div> </div> ` })} `;
}, "C:/Users/Besta/Masanawa corporate/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
