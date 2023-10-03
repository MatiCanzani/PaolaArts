/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_e5235834.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

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

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
