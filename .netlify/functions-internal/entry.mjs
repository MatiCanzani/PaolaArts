import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0138638a.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_e7a9d93c.mjs';
import './chunks/pages/image-endpoint_f02ab608.mjs';
import './chunks/astro-assets-services_80a3e33a.mjs';
import './chunks/pages/_slug__279d46b5.mjs';
/* empty css                                  */import 'react/jsx-runtime';
import 'framer-motion';
import 'tailwind-merge';

const _page0  = () => import('./chunks/image-endpoint_bf7a778e.mjs');
const _page1  = () => import('./chunks/index_77f29325.mjs');
const _page2  = () => import('./chunks/contact_0c56e9ee.mjs');
const _page3  = () => import('./chunks/about_32749980.mjs');
const _page4  = () => import('./chunks/arts_b5e8a526.mjs');
const _page5  = () => import('./chunks/contact_c6b54aa0.mjs');
const _page6  = () => import('./chunks/_slug__2a4ae188.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/arts.astro", _page4],["src/pages/api/contact.ts", _page5],["src/pages/[slug].astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
