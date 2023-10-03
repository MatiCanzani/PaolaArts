import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_e5235834.mjs';

const html = "<p>Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance.</p>";

				const frontmatter = {"title":"La Musa","img":"./paintsPhotos/paint-3.jpg","altImg":"Paint text alt 3"};
				const file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/content/paints/paint-3.md";
				const url = undefined;
				function rawContent() {
					return "\nNor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance.";
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
