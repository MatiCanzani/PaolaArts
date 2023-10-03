import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_e5235834.mjs';

const html = "<p>He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show.</p>";

				const frontmatter = {"title":"Pensamientos","img":"./paintsPhotos/paint-5.jpg","altImg":"Paint text alt 5"};
				const file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/content/paints/paint-5.md";
				const url = undefined;
				function rawContent() {
					return "\nHe unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
