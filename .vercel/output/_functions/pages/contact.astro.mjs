/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_w9WMcx6H.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us - Masanawa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="text-center mb-16"> <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-teal to-brand-gold mb-4 pb-2 tracking-tight">Get in Touch</h1> <p class="text-xl text-gray-600 font-medium">We'd love to hear from you. Let's build something together.</p> </div> <div class="grid md:grid-cols-2 gap-12"> <!-- Contact Info --> <div class="space-y-8"> <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-brand-purple/5"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </div> <div> <p class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p> <a href="mailto:belloabubakaratiku@gmail.com" class="text-lg font-medium text-gray-900 hover:text-brand-purple transition-colors">belloabubakaratiku@gmail.com</a> </div> </div> <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> </div> <div> <p class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Address</p> <p class="text-lg font-medium text-gray-900">
No 2 Zangon Shanu,<br>
Sokoto Road, Zaria,<br>
Kaduna State, Nigeria
</p> </div> </div> </div> </div> <div class="bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 p-8 rounded-3xl border border-brand-purple/10"> <h3 class="text-xl font-bold text-brand-purple mb-4">Connect with Founder</h3> <p class="text-gray-600 mb-6">
Interested in collaborating on Civic Tech or Human Rights initiatives? Reach out directly to Bello Abubakar Atiku.
</p> <a href="/bello-abubakar-atiku" class="text-brand-purple font-bold hover:text-brand-dark flex items-center gap-2">
View Profile
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a> </div> </div> <!-- Contact Form --> <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-brand-purple/5"> <h3 class="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3> <form class="space-y-6"> <div> <label for="name" class="block text-sm font-bold text-gray-700 mb-2">Name</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" placeholder="Your Name" required> </div> <div> <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" placeholder="your@email.com" required> </div> <div> <label for="message" class="block text-sm font-bold text-gray-700 mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all" placeholder="How can we help you?" required></textarea> </div> <button type="submit" class="w-full bg-brand-purple hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-brand-purple/20">
Send Message
</button> </form> </div> </div> </div> ` })}`;
}, "C:/Users/Besta/Masanawa corporate/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
