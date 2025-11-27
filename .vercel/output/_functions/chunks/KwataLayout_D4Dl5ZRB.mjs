import { e as createComponent, f as createAstro, o as renderHead, p as renderSlot, r as renderTemplate } from './astro/server_CdnQXOD5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$KwataLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KwataLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} | Kwata Admin</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-50 text-gray-900 font-['Inter'] min-h-screen flex"> <!-- Sidebar --> <aside class="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 z-50 flex flex-col"> <div class="p-6 border-b border-gray-100"> <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity"> <img src="/logo.svg" alt="Masanawa" class="h-8"> <span class="font-display font-bold text-gray-900 text-sm tracking-wide">KWATA</span> </a> </div> <nav class="flex-1 p-4 space-y-1"> <a href="/kwata" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-brand-purple/5 hover:text-brand-purple rounded-xl transition-colors font-medium"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
Dashboard
</a> <a href="/kwata/projects" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-brand-purple/5 hover:text-brand-purple rounded-xl transition-colors font-medium"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
Projects
</a> </nav> <div class="p-4 border-t border-gray-100"> <a href="/" class="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-purple transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
View Site
</a> </div> </aside> <!-- Main Content --> <main class="flex-1 ml-64 p-8"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Besta/Masanawa corporate/src/layouts/KwataLayout.astro", void 0);

export { $$KwataLayout as $ };
