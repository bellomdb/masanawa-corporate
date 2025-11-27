import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BDEwet4i.mjs';
import { manifest } from './manifest_jbSnqcG3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/generate-project.astro.mjs');
const _page4 = () => import('./pages/api/save-project.astro.mjs');
const _page5 = () => import('./pages/bello-abubakar-atiku.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/kwata/login.astro.mjs');
const _page8 = () => import('./pages/kwata/projects/_id_.astro.mjs');
const _page9 = () => import('./pages/kwata/projects.astro.mjs');
const _page10 = () => import('./pages/kwata/signup.astro.mjs');
const _page11 = () => import('./pages/kwata.astro.mjs');
const _page12 = () => import('./pages/privacy.astro.mjs');
const _page13 = () => import('./pages/projects/_slug_.astro.mjs');
const _page14 = () => import('./pages/terms.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/generate-project.ts", _page3],
    ["src/pages/api/save-project.ts", _page4],
    ["src/pages/bello-abubakar-atiku.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/kwata/login.astro", _page7],
    ["src/pages/kwata/projects/[id].astro", _page8],
    ["src/pages/kwata/projects/index.astro", _page9],
    ["src/pages/kwata/signup.astro", _page10],
    ["src/pages/kwata/index.astro", _page11],
    ["src/pages/privacy.astro", _page12],
    ["src/pages/projects/[slug].astro", _page13],
    ["src/pages/terms.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "85746c2b-a80f-4ec8-8cab-671a731f5710",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
