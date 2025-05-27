import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const realEstateProcess = defineType({
  name: "realEstateProcess",
  title: "Real Estate Process",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "processCategoryTitle",
      type: "string",
      title: "Process Category Title", // e.g., "Deciding To Buy"
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "processCategorySlug",
      type: "slug",
      title: "Process Category Slug",
      options: {
        source: "processCategoryTitle",
        maxLength: 96, // Recommended limit for slugs
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "processCategoryDescription",
      type: "text", // Changed from "string" to "text" for longer descriptions
      title: "Process Category Description", // e.g., "Deciding To Buy"
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "processSteps",
      type: "array",
      title: "Process Steps",
      of: [
        defineField({
          name: "processStep",
          type: "object",
          title: "Process Step",
          fields: [
            defineField({
              name: "stepTitle",
              type: "string",
              title: "Step Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "stepSlug",
              type: "slug",
              title: "Step Slug",
              options: {
                source: "stepTitle",
                maxLength: 96, // Recommended limit for slugs
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "stepContent",
              type: "array",
              title: "Step Content",
              of: [
                { type: "block" }, // PortableText for rich text content
                // Add other portable text types if needed (e.g., images, custom components)
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
