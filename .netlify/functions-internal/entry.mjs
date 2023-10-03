import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6ab71428.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_e5235834.mjs';
import './chunks/pages/generic_71440c80.mjs';
import './chunks/astro-assets-services_cf3a5ec8.mjs';

const _page0  = () => import('./chunks/generic_f5eab6e6.mjs');
const _page1  = () => import('./chunks/index_c7f0f917.mjs');
const _page2  = () => import('./chunks/contact_bd03c41e.mjs');
const _page3  = () => import('./chunks/about_0782517c.mjs');
const _page4  = () => import('./chunks/arts_ae6bcc79.mjs');
const _page5  = () => import('./chunks/contact_c6b54aa0.mjs');
const _page6  = () => import('./chunks/_slug__6e0c121a.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/arts.astro", _page4],["src/pages/api/contact.ts", _page5],["src/pages/[slug].astro", _page6]]);
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
