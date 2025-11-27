/* empty css                                 */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_w9WMcx6H.mjs';
import { s as supabase } from '../chunks/supabase_DdrpAs7p.mjs';
export { renderers } from '../renderers.mjs';

const unigeria = {
  name: "UNigeria",
  description: "Empowering Citizens, Strengthening Democracy. Join the movement for a transparent and accountable Nigeria. Report issues, verify facts, and collaborate.",
  content: `
### Report Issues
Share concerns about security, infrastructure, health, and more with our AI-powered reporting system.

### Join the Community
Connect with fellow citizens, share success stories, and collaborate for a better Nigeria.

### Make an Impact
Track progress, verify facts, and see real change happening in your community.
    `,
  status: "active",
  slug: "unigeria",
  icon_letter: "U",
  icon_color: "#0D9488",
  // Teal
  order_index: 1,
  url: ""
};

const localProjects = [
  unigeria
];

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data: dbProjects, error } = await supabase.from("projects").select("*").eq("status", "active").order("order_index", { ascending: true });
  if (error) {
    console.error("Error fetching projects:", error);
  }
  let projects = (dbProjects || []).filter((p) => !p.name.toLowerCase().includes("founder profile"));
  const dbSlugs = new Set(projects.map((p) => p.slug));
  const newLocalProjects = localProjects.filter((p) => !dbSlugs.has(p.slug));
  projects = [...newLocalProjects, ...projects];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Masanawa" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1 flex flex-col items-center justify-center p-4 py-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/5 via-white to-white"> <div class="text-center mb-16 max-w-4xl mx-auto"> <h1 class="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-teal to-brand-gold pb-2">
Explore Masanawa
</h1> <p class="text-gray-600 text-xl mb-10 font-medium max-w-2xl mx-auto">
Building the future of digital services in Nigeria through innovation, creativity, and technology.
</p> <div class="relative w-full max-w-2xl mx-auto group"> <div class="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-teal to-brand-gold rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div> <div class="relative"> <input id="searchInput" type="text" placeholder="Search Masanawa projects or type a URL" class="w-full bg-white border-2 border-transparent focus:border-brand-purple rounded-full py-5 px-14 text-gray-900 placeholder-gray-400 outline-none shadow-xl shadow-brand-purple/5 transition-all duration-300 text-lg"> <div class="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-purple transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </div> </div> </div> </div> <div id="projectGrid" class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full px-4"> ${projects && projects.length > 0 ? projects.map((project) => renderTemplate`<div class="project-card group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-purple/20 shadow-lg hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2 h-full"${addAttribute(project.name.toLowerCase(), "data-name")}${addAttribute(project.description?.toLowerCase() || "", "data-description")}> <div class="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden bg-white p-2"> <img src="/favicon.svg"${addAttribute(project.name, "alt")} class="w-full h-full object-contain"> </div> <h3 class="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors mb-2">${project.name}</h3> ${project.description && renderTemplate`<p class="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6 flex-1">${project.description}</p>`} <div class="flex gap-3 w-full mt-auto relative z-10"> <a${addAttribute(`/projects/${project.slug}`, "href")} class="flex-1 bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-700 py-2 rounded-xl text-sm font-bold transition-colors">
Read More
</a> ${project.url && renderTemplate`<a${addAttribute(project.url, "href")} target="_blank" class="flex-1 bg-brand-purple/10 hover:bg-brand-purple hover:text-white text-brand-purple py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-1">
Visit <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> </a>`} </div> <!-- Hover glow effect --> <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> </div>`) : renderTemplate`<div class="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300"> <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg> </div> <p class="text-xl font-bold text-gray-900">No projects available yet.</p> <p class="text-gray-500 mt-2">Check back soon for exciting new projects!</p> </div>`} </div> </main> ` })} ${renderScript($$result, "C:/Users/Besta/Masanawa corporate/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Besta/Masanawa corporate/src/pages/index.astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
