import { type FormEvent, useState } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight text-center text-[#f0eeea] font-abril">
          Get in touch
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl font-space">
          Have questions about my work? I would love to hear from you! Please
          take a moment to fill out the form below, and I'll get back to you as
          soon as possible. I look forward to connecting with you soon!
        </p>

        <form data-netlify="true" onSubmit={submit}>
          <label
            htmlFor="name"
            className=" font-space block mb-2 text-sm font-medium text-gray-300"
          >
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className=" font-space shadow-sm bg-gray-50 border border-gray-300 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Your name"
              required
            />
          </label>
          <label
            htmlFor="email"
            className=" font-space block mb-2 text-sm font-medium text-gray-300"
          >
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className=" font-space block p-3 w-full text-sm text-black bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Your e-mail"
              required
            />
          </label>
          <label
            htmlFor="message"
            className=" font-space block mb-2 text-sm font-medium text-black"
          >
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={6}
              className=" font-space block p-2.5 w-full text-sm text-black bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </label>
          <button
            type="submit"
            className=" font-space py-3 px-5 text-sm font-medium text-center text-white bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>

          {responseMessage && <p>{responseMessage}</p>}
        </form>
      </div>
  );
}
