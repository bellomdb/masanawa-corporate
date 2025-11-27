/* empty css                                    */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dx_paOlX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Kwata Admin" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full space-y-8"> <div class="text-center"> <img src="/logo.svg" alt="Masanawa" class="h-16 mx-auto mb-6"> <h2 class="text-3xl font-extrabold text-gray-900">Kwata Admin</h2> <p class="mt-2 text-sm text-gray-600">Sign in to manage your projects</p> </div> <div class="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100"> <div class="space-y-6"> <div> <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Email address</label> <input id="email" name="email" type="email" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" placeholder="you@example.com"> </div> <div> <label for="password" class="block text-sm font-bold text-gray-700 mb-2">Password</label> <input id="password" name="password" type="password" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" placeholder="••••••••"> </div> <div id="error-message" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"></div> <button id="login-btn" type="button" class="w-full bg-brand-purple hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-brand-purple/20">
Sign in
</button> </div> </div> <p class="text-center text-sm text-gray-500"> <a href="/" class="font-medium text-brand-purple hover:text-brand-dark">
← Back to site
</a> </p> </div> </div> ` })} ${renderScript($$result, "C:/Users/Besta/Masanawa corporate/src/pages/kwata/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Besta/Masanawa corporate/src/pages/kwata/login.astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/kwata/login.astro";
const $$url = "/kwata/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
