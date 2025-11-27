/* empty css                                       */
import { e as createComponent, f as createAstro, r as renderTemplate, n as defineScriptVars, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_CdnQXOD5.mjs';
import 'piccolore';
import { $ as $$KwataLayout } from '../../../chunks/KwataLayout_D4Dl5ZRB.mjs';
import { s as supabase } from '../../../chunks/supabase_DdrpAs7p.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: projects } = await supabase.from("projects").select("id");
  const paths = projects?.map((p) => ({ params: { id: p.id.toString() } })) || [];
  return [
    ...paths,
    { params: { id: "new" } }
  ];
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const isNew = id === "new";
  let project = {
    name: "",
    description: "",
    content: "",
    url: "",
    slug: "",
    status: "draft",
    icon_letter: "",
    icon_color: "#8B5CF6",
    seo_title: "",
    seo_description: ""};
  if (!isNew && id) {
    const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();
    if (error) {
      console.error("Error fetching project:", error);
    } else if (data) {
      project = data;
    }
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
    const generateBtn = document.getElementById('generateBtn');
    const saveBtn = document.getElementById('saveBtn');
    const aiPrompt = document.getElementById('aiPrompt');

    // AI Generation
    generateBtn?.addEventListener('click', async () => {
        const prompt = aiPrompt.value;
        const nameInput = document.getElementById('name');
        
        if (!prompt && !nameInput.value) {
            alert('Please enter a project name or a brief to generate content.');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.innerHTML = \`<svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Generating...\`;

        try {
            const response = await fetch('/api/generate-project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    projectName: nameInput.value || prompt.split('-')[0].trim(),
                    projectBrief: prompt
                })
            });

            const data = await response.json();

            if (data.error) throw new Error(data.error);

            // Populate fields
            if (data.name) document.getElementById('name').value = data.name;
            document.getElementById('description').value = data.description || '';
            document.getElementById('content').value = data.content || '';
            document.getElementById('slug').value = data.slug || '';
            document.getElementById('seo_title').value = data.seo_title || '';
            document.getElementById('seo_description').value = data.seo_description || '';
            document.getElementById('icon_letter').value = data.icon_letter || '';
            document.getElementById('icon_color').value = data.icon_color || '#8B5CF6';
            
            if (!nameInput.value) nameInput.value = prompt.split('-')[0].trim();

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate content. Please try again.');
        } finally {
            generateBtn.disabled = false;
            generateBtn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path></svg> Generate\`;
        }
    });

    // Save Project
    saveBtn?.addEventListener('click', async () => {
        const projectData = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            content: document.getElementById('content').value,
            status: document.getElementById('status').value,
            slug: document.getElementById('slug').value,
            url: document.getElementById('url').value,
            icon_letter: document.getElementById('icon_letter').value,
            icon_color: document.getElementById('icon_color').value,
            seo_title: document.getElementById('seo_title').value,
            seo_description: document.getElementById('seo_description').value,
        };

        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';

        try {
            const response = await fetch('/api/save-project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: isNew ? null : id, ...projectData })
            });
            
            if (response.ok) {
                window.location.href = '/kwata/projects';
            } else {
                throw new Error('Failed to save');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save project.');
            saveBtn.disabled = false;
            saveBtn.textContent = 'Save Project';
        }
    });
})();<\/script>`], ["", " <script>(function(){", `
    const generateBtn = document.getElementById('generateBtn');
    const saveBtn = document.getElementById('saveBtn');
    const aiPrompt = document.getElementById('aiPrompt');

    // AI Generation
    generateBtn?.addEventListener('click', async () => {
        const prompt = aiPrompt.value;
        const nameInput = document.getElementById('name');
        
        if (!prompt && !nameInput.value) {
            alert('Please enter a project name or a brief to generate content.');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.innerHTML = \\\`<svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Generating...\\\`;

        try {
            const response = await fetch('/api/generate-project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    projectName: nameInput.value || prompt.split('-')[0].trim(),
                    projectBrief: prompt
                })
            });

            const data = await response.json();

            if (data.error) throw new Error(data.error);

            // Populate fields
            if (data.name) document.getElementById('name').value = data.name;
            document.getElementById('description').value = data.description || '';
            document.getElementById('content').value = data.content || '';
            document.getElementById('slug').value = data.slug || '';
            document.getElementById('seo_title').value = data.seo_title || '';
            document.getElementById('seo_description').value = data.seo_description || '';
            document.getElementById('icon_letter').value = data.icon_letter || '';
            document.getElementById('icon_color').value = data.icon_color || '#8B5CF6';
            
            if (!nameInput.value) nameInput.value = prompt.split('-')[0].trim();

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate content. Please try again.');
        } finally {
            generateBtn.disabled = false;
            generateBtn.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path></svg> Generate\\\`;
        }
    });

    // Save Project
    saveBtn?.addEventListener('click', async () => {
        const projectData = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            content: document.getElementById('content').value,
            status: document.getElementById('status').value,
            slug: document.getElementById('slug').value,
            url: document.getElementById('url').value,
            icon_letter: document.getElementById('icon_letter').value,
            icon_color: document.getElementById('icon_color').value,
            seo_title: document.getElementById('seo_title').value,
            seo_description: document.getElementById('seo_description').value,
        };

        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';

        try {
            const response = await fetch('/api/save-project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: isNew ? null : id, ...projectData })
            });
            
            if (response.ok) {
                window.location.href = '/kwata/projects';
            } else {
                throw new Error('Failed to save');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save project.');
            saveBtn.disabled = false;
            saveBtn.textContent = 'Save Project';
        }
    });
})();<\/script>`])), renderComponent($$result, "KwataLayout", $$KwataLayout, { "title": isNew ? "New Project" : "Edit Project" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="flex items-center justify-between mb-8"> <h1 class="text-3xl font-bold text-gray-900">${isNew ? "Create New Project" : "Edit Project"}</h1> <div class="flex gap-3"> <a href="/kwata/projects" class="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</a> <button id="saveBtn" class="bg-brand-purple hover:bg-brand-dark text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-brand-purple/20 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
Save Project
</button> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Form --> <div class="lg:col-span-2 space-y-8"> <!-- AI Generator Card --> <div class="bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 p-6 rounded-2xl border border-brand-purple/10"> <div class="flex items-center gap-3 mb-4"> <div class="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg> </div> <h3 class="text-lg font-bold text-brand-purple">Gemini AI Assistant</h3> </div> <p class="text-sm text-gray-600 mb-4">Enter a project name and brief description, and let AI generate the content for you.</p> <div class="flex gap-3"> <input type="text" id="aiPrompt" placeholder="e.g., UNigeria - A civic tech platform for reporting..." class="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-purple outline-none text-sm"> <button id="generateBtn" type="button" class="bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path></svg>
Generate
</button> </div> </div> <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6"> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Project Name</label> <input type="text" id="name"${addAttribute(project.name, "value")} class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none transition-all font-bold text-lg"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Short Description (Card)</label> <textarea id="description" rows="3" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none transition-all">${project.description}</textarea> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Full Content (Markdown)</label> <textarea id="content" rows="15" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none transition-all font-mono text-sm">${project.content}</textarea> </div> </div> </div> <!-- Sidebar Settings --> <div class="space-y-8"> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6"> <h3 class="font-bold text-gray-900 border-b border-gray-100 pb-4">Settings</h3> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Status</label> <select id="status" class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none"> <option value="draft"${addAttribute(project.status === "draft", "selected")}>Draft</option> <option value="active"${addAttribute(project.status === "active", "selected")}>Active</option> <option value="archived"${addAttribute(project.status === "archived", "selected")}>Archived</option> </select> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Slug (URL)</label> <input type="text" id="slug"${addAttribute(project.slug, "value")} class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none text-sm"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">External URL (Optional)</label> <input type="text" id="url"${addAttribute(project.url, "value")} class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none text-sm" placeholder="https://..."> </div> </div> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6"> <h3 class="font-bold text-gray-900 border-b border-gray-100 pb-4">Appearance</h3> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Icon Letter</label> <input type="text" id="icon_letter"${addAttribute(project.icon_letter, "value")} maxlength="1" class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none text-center font-bold text-xl uppercase"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Color</label> <input type="color" id="icon_color"${addAttribute(project.icon_color, "value")} class="w-full h-[46px] rounded-xl cursor-pointer"> </div> </div> </div> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6"> <h3 class="font-bold text-gray-900 border-b border-gray-100 pb-4">SEO</h3> <div> <label class="block text-sm font-bold text-gray-700 mb-2">SEO Title</label> <input type="text" id="seo_title"${addAttribute(project.seo_title, "value")} class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none text-sm"> </div> <div> <label class="block text-sm font-bold text-gray-700 mb-2">Meta Description</label> <textarea id="seo_description" rows="3" class="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-purple outline-none text-sm">${project.seo_description}</textarea> </div> </div> </div> </div> </div> ` }), defineScriptVars({ id, isNew }));
}, "C:/Users/Besta/Masanawa corporate/src/pages/kwata/projects/[id].astro", void 0);

const $$file = "C:/Users/Besta/Masanawa corporate/src/pages/kwata/projects/[id].astro";
const $$url = "/kwata/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
