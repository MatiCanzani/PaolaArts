/* empty css                            */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_e7a9d93c.mjs';
import { $ as $$Layout } from './_slug__279d46b5.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import '../astro-assets-services_80a3e33a.mjs';
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
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "name", children: [
      "Name",
      /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", autoComplete: "name", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
      "Email",
      /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", autoComplete: "email", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "message", children: [
      "Message",
      /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", autoComplete: "off", required: true })
    ] }),
    /* @__PURE__ */ jsx("button", { children: "Send" }),
    responseMessage && /* @__PURE__ */ jsx("p", { children: responseMessage })
  ] });
}

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Get in touch" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>Get in touch</h1>${renderComponent($$result2, "ContactForm", Form, {})}` })}`;
}, "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/contact.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
