import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, o as renderHead, k as renderComponent, p as renderSlot } from './astro/server_CdnQXOD5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-white/90"> <div class="max-w-7xl mx-auto flex items-center justify-between"> <a href="/" class="flex items-center hover:opacity-80 transition-opacity"> <img src="/logo.svg" alt="Masanawa" class="h-12"> </a> <nav class="flex gap-6 items-center"> <a href="/about" class="text-gray-600 hover:text-brand-purple transition-colors text-sm font-semibold font-display tracking-wide">About</a> <a href="/bello-abubakar-atiku" class="text-gray-600 hover:text-brand-purple transition-colors text-sm font-semibold font-display tracking-wide">Founder</a> <a href="https://www.citizenvoice.vip" target="_blank" class="text-gray-600 hover:text-brand-purple transition-colors text-sm font-semibold font-display tracking-wide flex items-center gap-2">
UNigeria
<span class="bg-brand-purple/10 text-brand-purple text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span> </a> </nav> </div> </header>`;
}, "C:/Users/Besta/Masanawa corporate/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-gray-200 py-12 px-8 text-sm text-gray-500 mt-auto"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"> <div class="flex items-center gap-4"> <img src="/logo.svg" alt="Masanawa" class="h-8 opacity-50 grayscale hover:grayscale-0 transition-all"> <span class="text-gray-400">© 2025 Weavewell Industries Limited</span> </div> <div class="flex gap-8"> <a href="/privacy" class="hover:text-brand-purple transition-colors font-medium">Privacy Policy</a> <a href="/terms" class="hover:text-brand-purple transition-colors font-medium">Terms of Service</a> <a href="/contact" class="hover:text-brand-purple transition-colors font-medium">Contact Us</a> </div> </div> </footer>`;
}, "C:/Users/Besta/Masanawa corporate/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Masanawa - Weavewell Industries Limited. Building the future of digital services in Nigeria through innovative media, e-learning, and virtual business solutions."><meta name="viewport" content="width=device-width"><meta name="keywords" content="Masanawa, Weavewell Industries, Digital Solutions, Nigeria, E-learning, Media Services, Virtual Business"><meta name="author" content="Weavewell Industries Limited"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="Building the future of digital services in Nigeria"><meta property="og:site_name" content="Masanawa"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description" content="Building the future of digital services in Nigeria"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-50 text-gray-900 font-['Inter'] min-h-screen flex flex-col selection:bg-brand-purple selection:text-white"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Besta/Masanawa corporate/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
