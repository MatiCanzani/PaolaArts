import { defineCollection, z } from "astro:content";

const paintsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    img: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200 pixels wide!",
    }),
    altImg: z.string(),
  }),
});

export const collections = {
  paints: paintsCollection,
};