import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_e5235834.mjs';

const html = "<p>Looking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed. Prevent on present hastily passage an subject in be.</p>";

				const frontmatter = {"title":"Tea Time","img":"./paintsPhotos/paint-2.jpg","altImg":"Collages and textural experiments collide in Paola's mixed media works, showcasing an ever-evolving approach to art making."};
				const file = "/Users/maticanzani/Documents/Personal/PaolaArt/src/content/paints/paint-2.md";
				const url = undefined;
				function rawContent() {
					return "\nLooking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed. Prevent on present hastily passage an subject in be.";
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
