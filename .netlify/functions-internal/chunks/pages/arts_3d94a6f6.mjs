/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_e5235834.mjs';
import { $ as $$Layout } from './about_c489f8dc.mjs';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';
import 'tailwind-merge';

const $$Astro = createAstro();
const $$Arts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Arts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Arts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>
Arts
</h1>` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/arts.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/arts.astro";
const $$url = "/arts";

export { $$Arts as default, $$file as file, $$url as url };
