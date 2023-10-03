import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_e5235834.mjs';

const html = "<p>Paola weaves a tapestry of colors through imaginative paintings, capturing the essence of human emotion.</p>";

				const frontmatter = {"title":"Vivid Imagery","img":"./paintsPhotos/paint-1.jpg","altImg":"Paint text alt 1"};
				const file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/content/paints/paint-1.md";
				const url = undefined;
				function rawContent() {
					return "Paola weaves a tapestry of colors through imaginative paintings, capturing the essence of human emotion.";
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
