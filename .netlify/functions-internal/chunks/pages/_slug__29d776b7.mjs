/* empty css                            */import { c as createAstro, d as createComponent, A as AstroError, e as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, g as renderComponent, h as renderHead, i as renderSlot, j as UnknownContentCollectionError, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, u as unescapeHTML } from '../astro_e7a9d93c.mjs';
import { g as getImage$1, p as prependForwardSlash } from '../astro-assets-services_80a3e33a.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const $$Astro$4 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/node_modules/.pnpm/astro@3.2.0/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[{"protocol":"https"}]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#f0eeea] h-20 flex justify-center items-center"><span class="font-space"> © 2023 Paola Canzani Art</span></footer>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/components/Footer.astro", void 0);

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildcren",
      staggerChildren: 0.15
    }
  },
  hidden: {
    transition: {
      opacity: 0
    }
  }
};
const itemMotion = {
  hidden: {
    opacity: 0,
    x: 0
  },
  visible: {
    opacity: 1,
    x: 0
  }
};
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  useMediaQuery("(min-width: 1280px)");
  return /* @__PURE__ */ jsxs("nav", { className: "relative flex justify-between items-center py-12 mx-8 font-md font-abril md:mx-16 lg:mx-32", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl text-black", children: " Paola Canzani Arts" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-12 text-black font-space", children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/about", children: "About me " }),
      /* @__PURE__ */ jsx("a", { href: "/arts", children: "Arts" }),
      /* @__PURE__ */ jsx("a", { href: "/arts", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        onClick: () => setIsOpen((prevIsOpen) => !prevIsOpen),
        className: "z-50 lg:hidden space-y-1.5 cursor-pointer",
        initial: false,
        animate: isOpen ? "visible" : "hidden",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 },
              className: "block h-0.5 w-8 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { opacity: isOpen ? 0 : 1 },
              className: "block h-0.5 w-7 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
                width: isOpen ? 32 : 16
              },
              className: "block h-0.5 w-6 bg-black"
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed flex justify-center  items-center bg-[#f0eeea] top-0 bottom-0 left-0 w-full h-screen font-medium lg:hidden",
        animate: { opacity: 1, x: 0 },
        initial: { opacity: 0, x: 25 },
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: navMotion,
            animate: "visible",
            initial: "hidden",
            className: twMerge(
              "flex justify-center flex-col gap-24 items-center text-5xl"
            ),
            children: [
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "/",
                  variants: itemMotion,
                  className: "p-2 m-0 font-space",
                  children: "Home"
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "/about",
                  variants: itemMotion,
                  className: "p-2 m-0 font-space",
                  children: [
                    " ",
                    "About me"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "/arts",
                  variants: itemMotion,
                  className: "p-2 m-0 font-space",
                  children: "Arts"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "/arts",
                  variants: itemMotion,
                  className: "p-2 m-0 font-space",
                  children: "Contact"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#f0eeea]">${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/maticanzani/Documents/Personal/PaolaArt/src/components/Nav", "client:component-export": "default" })}</header>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta${addAttribute(title, "title")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Space+Grotesk&display=swap" rel="stylesheet">${renderHead()}</head><body class="bg-[#faf9f7]"><main>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</main></body></html>`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/layouts/Layout.astro", void 0);

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
lookupMap = {"paints":{"type":"content","entries":{"paint-1":"/src/content/paints/paint-1.md","paint-2":"/src/content/paints/paint-2.md","paint-3":"/src/content/paints/paint-3.md","paint-5":"/src/content/paints/paint-5.md","paint-4":"/src/content/paints/paint-4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/paints/paint-1.md": () => import('../paint-1_421da0ea.mjs'),"/src/content/paints/paint-2.md": () => import('../paint-2_10b67b92.mjs'),"/src/content/paints/paint-3.md": () => import('../paint-3_af79661f.mjs'),"/src/content/paints/paint-4.md": () => import('../paint-4_b40c7b75.mjs'),"/src/content/paints/paint-5.md": () => import('../paint-5_ba558828.mjs')

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

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const paints = await getCollection("paints");
  const paths = paints.map(({ slug, data }) => {
    return { params: { slug }, props: { data } };
  });
  return paths;
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-11/12 md:max-w-screen-lg lg:max-w-7xl mx-auto z-50 absolute"><div class="md:max-w-lg min-h-full px-10 py-16">${renderComponent($$result2, "Image", $$Image, { "src": data.img, "alt": data.altImg, "class": "rounded-lg h-full object-cover max-h-max" })}<h2 class="font-abril text-4xl mt-7">${data.title}</h2></div></main>` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/[slug].astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, $$Image as a, getCollection as g, imageConfig as i };
