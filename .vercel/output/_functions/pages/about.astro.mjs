/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dx_paOlX.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const companyInfo = {
    legalName: "Weavewell Industries Limited",
    brandName: "Masanawa",
    objectives: [
      "Develop civic technology that empowers citizens and strengthens democratic institutions",
      "Provide secure, data-driven platforms for human rights documentation and advocacy",
      "Foster digital literacy and community resilience through innovative e-learning"
    ],
    vision: "To be the leading force in African civic technology, where digital innovation bridges the gap between citizens and governance, ensuring transparency, accountability, and social justice for all.",
    mission: "Building the future of digital services in Nigeria by leveraging technology to empower communities, protect human rights, and strengthen the fabric of democracy."
  };
  const platforms = [
    {
      name: "UNigeria",
      description: "Empowering Citizens, Strengthening Democracy. A secure platform for reporting, fact-checking, and community collaboration.",
      status: "Active Development"
    },
    {
      name: "Labarai",
      description: "Hausa news and knowledge platform bridging the information gap in Northern Nigeria.",
      status: "Active"
    },
    {
      name: "Fasahar Zamani",
      description: "Cultural preservation initiative digitizing and celebrating Nigerian heritage.",
      status: "In Development"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Masanawa - Weavewell Industries" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-teal to-brand-gold mb-4 pb-2 tracking-tight">About ${companyInfo.brandName}</h1> <p class="text-xl text-gray-600 font-medium">${companyInfo.legalName}</p> </div> <!-- Company Overview --> <div class="bg-white p-10 rounded-3xl mb-12 border border-gray-100 shadow-xl shadow-brand-purple/5 relative overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div> <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 relative z-10"> <span class="w-2 h-8 bg-brand-purple rounded-full"></span>
Who We Are
</h2> <div class="space-y-6 text-gray-600 text-lg leading-relaxed relative z-10"> <p> <span class="font-bold text-brand-purple">Masanawa</span> (Weavewell Industries Limited) is a pioneering civic technology firm dedicated to using digital innovation for social good. Founded by Bello Abubakar Atiku, our work is rooted in the belief that technology can be a powerful tool for protecting human rights and fostering democratic participation.
</p> <p>
Drawing from deep experience with the <span class="font-bold text-gray-900">Center for Democratic Development Research and Training (CEDDERT)</span>, our approach combines grassroots community sensitization with cutting-edge software development. We understand that true digital empowerment requires not just tools, but a deep understanding of the communities we serve.
</p> <p>
From secure information gathering in Katsina and Zamfara to building platforms like <span class="font-bold text-brand-teal">UNigeria</span>, we are committed to creating a safer, more transparent, and accountable society.
</p> </div> </div> <!-- Vision & Mission --> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="bg-gradient-to-br from-white to-brand-purple/5 p-8 rounded-3xl border border-brand-purple/10 shadow-lg hover:shadow-xl transition-shadow duration-300"> <h3 class="text-2xl font-bold text-brand-purple mb-4 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
Our Vision
</h3> <p class="text-gray-700 leading-relaxed font-medium">${companyInfo.vision}</p> </div> <div class="bg-gradient-to-br from-white to-brand-teal/5 p-8 rounded-3xl border border-brand-teal/10 shadow-lg hover:shadow-xl transition-shadow duration-300"> <h3 class="text-2xl font-bold text-brand-teal mb-4 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
Our Mission
</h3> <p class="text-gray-700 leading-relaxed font-medium">${companyInfo.mission}</p> </div> </div> <!-- Objectives --> <div class="bg-white p-10 rounded-3xl mb-12 border border-gray-100 shadow-xl shadow-brand-purple/5"> <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"> <span class="w-2 h-8 bg-brand-gold rounded-full"></span>
Our Core Objectives
</h2> <div class="space-y-4"> ${companyInfo.objectives.map((objective, index) => renderTemplate`<div class="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"> <div class="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 font-bold border border-brand-gold/50 text-lg"> ${index + 1} </div> <p class="text-gray-700 pt-1.5 font-medium text-lg">${objective}</p> </div>`)} </div> </div> <!-- Platforms --> <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-brand-purple/5"> <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"> <span class="w-2 h-8 bg-brand-teal rounded-full"></span>
Our Platforms
</h2> <div class="grid md:grid-cols-3 gap-6"> ${platforms.map((platform) => renderTemplate`<div class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-brand-purple hover:shadow-xl hover:shadow-brand-purple/10 transition-all duration-300 flex flex-col h-full"> <div class="flex-1"> <h4 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">${platform.name}</h4> <p class="text-gray-500 text-sm mb-4 leading-relaxed">${platform.description}</p> </div> <span${addAttribute(`inline-block px-3 py-1 rounded-full text-xs font-bold self-start ${platform.status === "Active" ? "bg-brand-green/10 text-brand-green" : platform.status === "Active Development" ? "bg-brand-purple/10 text-brand-purple" : "bg-brand-gold/10 text-brand-gold"}`, "class")}> ${platform.status} </span> </div>`)} </div> </div> <!-- CTA --> <div class="text-center mt-16"> <a href="/contact" class="inline-block bg-gradient-to-r from-brand-purple to-brand-indigo hover:from-brand-indigo hover:to-brand-purple text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 hover:-translate-y-1">
Get in Touch
</a> </div> </div> ` })}`;
}, "C:/Users/Besta/Masanawa corporate/src/pages/about.astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
