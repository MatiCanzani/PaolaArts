/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, A as AstroError, j as UnknownContentCollectionError, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, e as renderComponent, u as unescapeHTML, f as addAttribute } from '../astro_e5235834.mjs';
import { $ as $$Layout } from './about_c489f8dc.mjs';
import { $ as $$Image } from './generic_71440c80.mjs';
import { p as prependForwardSlash } from '../astro-assets-services_cf3a5ec8.mjs';

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

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/paints/paint-1.md": () => import('../paint-1_5b3e0e8c.mjs'),"/src/content/paints/paint-2.md": () => import('../paint-2_2a1cc543.mjs'),"/src/content/paints/paint-3.md": () => import('../paint-3_b1a392ee.mjs'),"/src/content/paints/paint-4.md": () => import('../paint-4_da99e562.mjs'),"/src/content/paints/paint-5.md": () => import('../paint-5_4e86b200.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"paints":{"type":"content","entries":{"paint-2":"/src/content/paints/paint-2.md","paint-3":"/src/content/paints/paint-3.md","paint-4":"/src/content/paints/paint-4.md","paint-1":"/src/content/paints/paint-1.md","paint-5":"/src/content/paints/paint-5.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/paints/paint-1.md": () => import('../paint-1_58dca085.mjs'),"/src/content/paints/paint-2.md": () => import('../paint-2_67dcb44b.mjs'),"/src/content/paints/paint-3.md": () => import('../paint-3_8c54e761.mjs'),"/src/content/paints/paint-4.md": () => import('../paint-4_8a7888eb.mjs'),"/src/content/paints/paint-5.md": () => import('../paint-5_e4320e96.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getCollection as g, index as i };
