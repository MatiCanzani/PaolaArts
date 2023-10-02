/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../astro_e7a9d93c.mjs';
import { g as getCollection, a as $$Image, $ as $$Layout } from './_slug__279d46b5.mjs';
import '../astro-assets-services_80a3e33a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';
import 'tailwind-merge';

const $$Astro$4 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-10 w-11/12 lg:max-w-9/12 p-10"><h2 class="font-abril text-2xl lg:text-4xl">Paola's Artistic Journey</h2><div class=""><p>
Welcome to the fantastical universe of Paola Canzani, where artistic
      wonders abound. Dive into Paola's stunning creations, each one telling a
      captivating story that’s sure to leave you speechless.
</p></div></section>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/partials/Intro.astro", void 0);

const $$Astro$3 = createAstro();
const $$Paint = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Paint;
  const allPaints = await getCollection("paints");
  return renderTemplate`${allPaints.map(({ slug, data }) => renderTemplate`${maybeRenderHead()}<div class="md:max-w-lg max-h-[400px] px-10 py-16"><a${addAttribute(slug, "href")}>${renderComponent($$result, "Image", $$Image, { "src": data.img, "alt": data.altImg, "class": "rounded-lg h-full object-cover max-h-max" })}<h2 class="font-abril text-xl mt-7">${data.title}</h2></a></div>`)}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/components/Paint.astro", void 0);

const $$Astro$2 = createAstro();
const $$Paints = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paints;
  return renderTemplate`${maybeRenderHead()}<section class="w-11/12 lg:max-w-9/12 p-10" id="paints"><h2 class="font-abril text-2xl lg:text-4xl">Paints</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">${renderComponent($$result, "Paint", $$Paint, {})}</div></section>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/partials/Paints.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="bg-black flex flex-col justify-center items-center w-screen h-screen"><div class="w-11/12 lg:max-w-7xl mx-auto flex justify-center items-center flex-col"><div class="w-100 flex justify-center content-center"><h1 class="text-5xl lg:text-7xl text-[#EDEDE9] text-center font-abril">
Explore Paola's Art World
</h1></div><div class="w-screen flex justify-center gap-20 items-center mt-24"><a href="#paints"><button class="bg-[#574e44] h-10 rounded font-space px-5 w-56" type="button">
View Gallery
</button></a><a href="/contact"><button class="bg-[#D6CCC2] h-10 rounded font-space px-5 w-56" type="button">
Get in Touch
</button></a></div></div></section>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/partials/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paola Canzani Art" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Intro", $$Intro, {})}${renderComponent($$result2, "Paints", $$Paints, {})}</main>` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/index.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
