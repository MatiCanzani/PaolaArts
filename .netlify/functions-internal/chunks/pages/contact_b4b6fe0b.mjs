/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_e5235834.mjs';
import { $ as $$Layout } from './about_c489f8dc.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'framer-motion';
import 'tailwind-merge';

function Form() {
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "py-8 lg:py-16 px-4 mx-auto max-w-screen-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl tracking-tight text-center text-[#f0eeea] font-abril", children: "Get in touch" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 lg:mb-16 font-light text-center text-white sm:text-xl font-space", children: "Have questions about my work? I would love to hear from you! Please take a moment to fill out the form below, and I'll get back to you as soon as possible. I look forward to connecting with you soon!" }),
    /* @__PURE__ */ jsxs("form", { "data-netlify": "true", onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "name",
          className: " font-space block mb-2 text-sm font-medium text-gray-300",
          children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              name: "name",
              autoComplete: "name",
              className: " font-space shadow-sm bg-gray-50 border border-gray-300 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ",
              placeholder: "Your name",
              required: true
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "email",
          className: " font-space block mb-2 text-sm font-medium text-gray-300",
          children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              autoComplete: "email",
              className: " font-space block p-3 w-full text-sm text-black bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ",
              placeholder: "Your e-mail",
              required: true
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "message",
          className: " font-space block mb-2 text-sm font-medium text-black",
          children: /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              autoComplete: "off",
              rows: 6,
              className: " font-space block p-2.5 w-full text-sm text-black bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500",
              placeholder: "Leave a comment..."
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: " font-space py-3 px-5 text-sm font-medium text-center text-white bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
          children: "Send message"
        }
      ),
      responseMessage && /* @__PURE__ */ jsx("p", { children: responseMessage })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Get in touch" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="bg-[url('/contactBkg.avif')]">${renderComponent($$result2, "ContactForm", Form, {})}</section>` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/contact.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
