/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_e7a9d93c.mjs';
import { $ as $$Layout } from './_slug__279d46b5.mjs';
import '../astro-assets-services_80a3e33a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';
import 'tailwind-merge';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About me" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>
About me
</h1>` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/about.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
