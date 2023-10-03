import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_e5235834.mjs';

const html = "<p>Cultivated who resolution connection motionless did occasional. Journey promise if it colonel. Can all mirth abode nor hills added.</p>";

				const frontmatter = {"title":"Lld time","img":"./paintsPhotos/paint-4.jpg","altImg":"Paint text alt 4"};
				const file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/content/paints/paint-4.md";
				const url = undefined;
				function rawContent() {
					return "\nCultivated who resolution connection motionless did occasional. Journey promise if it colonel. Can all mirth abode nor hills added. ";
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
