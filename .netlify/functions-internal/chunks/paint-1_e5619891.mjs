import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_e7a9d93c.mjs';
import './pages/_slug__29d776b7.mjs';
/* empty css                           */import './astro-assets-services_80a3e33a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'framer-motion';
import 'tailwind-merge';

const images = async function() {
					return {
						
					}
				};

				async function updateImageReferences(html) {
					return images().then((images) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) =>
							spreadAttributes({
								src: images[imagePath].src,
								...images[imagePath].attributes,
							})
						);
					});
				}

				const html = await updateImageReferences("<p>Paola weaves a tapestry of colors through imaginative paintings, capturing the essence of human emotion.</p>");

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
