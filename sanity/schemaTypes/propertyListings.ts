import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { string } from "zod";

export const propertyListings = defineType({
  name: "propertyListings",
  title: "Property Listings",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "Statement",
      type: "string",
    }),
    defineField({
      name: "Price",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "listingInformation",
      title: "Listing Infromation",
      type: "document",
      fields: [
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "string" }],
          description: "List of additional features of the property.",
        },
        {
          name: "location",
          title: "Location",
          type: "object",
          fields: [
            {
              name: "address",
              type: "string",
            },
            {
              name: "city",
              type: "string",
            },
            {
              name: "country",
              type: "string",
            },
            {
              name: "zipcode",
              type: "string",
            },
          ],
        },
        {
          name: "areaAndLot",
          title: "Area & Lot",
          type: "object",
          fields: [
            {
              name: "indoors",
              title: "Floor Area",
              type: "string",
            },
            {
              name: "outdoors",
              title: "Land Size",
              type: "string",
            },
          ],
        },
        {
          name: "financial",
          title: "Financial Infromation",
          type: "string",
        },
        {
          name: "additionalImages",
          title: "Additional Images",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // Allows cropping and focusing on images
              },
            },
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              description:
                "Description for the image for accessibility purposes.",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
