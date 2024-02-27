import { buildCollection, buildProperty } from "firecms";

export type DumbBlog = {
  id: string;
  heading: string;
  description: string;
  card_description: string;
  category: string;
  added_on: Date;
  thumbnail_image: string;
  blog_image: string;
};

export const dumbblogcollection = buildCollection<DumbBlog>({
  id: "dumbblog",
  name: "Dumb Blog Collection",
  path: "dumbblog",
  icon: "rss_feed",
  properties: {
    id: buildProperty({
      name: "Blog ID",
      validation: { required: true, unique: true },
      dataType: "string",
    }),
    heading: buildProperty({
      name: "Heading",
      validation: { required: true },
      dataType: "string",
    }),
    description: buildProperty({
      name: "Description",
      validation: { required: true },
      dataType: "string",
      markdown: true,
    }),
    card_description: buildProperty({
      name: "Blog Card Short Description",
      validation: { required: true },
      dataType: "string",
      markdown: true,
    }),
    category: buildProperty({
      dataType: "string",
      name: "Category",
      enumValues: [
        { id: "tech", label: "Technology", color: "blueDark" },
        { id: "life", label: "Life", color: "blueDark" },
      ],
    }),
    added_on: buildProperty({
      dataType: "date",
      name: "Created at",
      autoValue: "on_create",
    }),
    thumbnail_image: buildProperty({
      dataType: "string",
      name: "Thumbnail Image",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
        maxSize: 1024 * 1024,
        storeUrl: false,
        metadata: {
          cacheControl: "max-age=1000000",
        },
        fileName: (context) => {
          return context.file.name;
        },
      },
    }),
    blog_image: buildProperty({
      dataType: "string",
      name: "Blog Image",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
        maxSize: 1024 * 1024,
        storeUrl: false,
        metadata: {
          cacheControl: "max-age=1000000",
        },
        fileName: (context) => {
          return context.file.name;
        },
      },
    }),
  },
});
