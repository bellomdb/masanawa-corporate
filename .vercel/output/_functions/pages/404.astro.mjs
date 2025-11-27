/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CAF3AJbJ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 flex flex-col items-center justify-center p-4 text-center"> <div class="max-w-md"> <h1 class="text-9xl font-bold text-brand-purple mb-4">404</h1> <h2 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2> <p class="text-gray-600 mb-8">
The page you're looking for doesn't exist or has been moved.
</p> <div class="flex gap-4 justify-center"> <a href="/" class="bg-brand-purple hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-purple-500/20">
Go Home
</a> <a href="/about" class="border border-gray-300 text-gray-700 hover:border-brand-purple hover:text-brand-purple px-6 py-3 rounded-full font-medium transition-colors">
Learn More
</a> </div> </div> </div> ` })}`;
}, "C:/Users/Besta/Masanawa corporate/src/pages/404.astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
