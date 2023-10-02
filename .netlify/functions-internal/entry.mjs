import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e0486ce6.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_e7a9d93c.mjs';
import './chunks/pages/image-endpoint_fb4f47e5.mjs';
import './chunks/astro-assets-services_80a3e33a.mjs';
import './chunks/pages/_slug__29d776b7.mjs';
/* empty css                                  */import 'react/jsx-runtime';
import 'framer-motion';
import 'tailwind-merge';

const _page0  = () => import('./chunks/image-endpoint_99c2bbdc.mjs');
const _page1  = () => import('./chunks/index_0002cbf0.mjs');
const _page2  = () => import('./chunks/contact_fd1cd4f5.mjs');
const _page3  = () => import('./chunks/about_0476a4bf.mjs');
const _page4  = () => import('./chunks/arts_83b6fc86.mjs');
const _page5  = () => import('./chunks/contact_c6b54aa0.mjs');
const _page6  = () => import('./chunks/_slug__3dd0b0f3.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/arts.astro", _page4],["src/pages/api/contact.ts", _page5],["src/pages/[slug].astro", _page6]]);
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
