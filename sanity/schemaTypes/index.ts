import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { realEstateProcess } from "./realEstateProcess";
import { propertyListings } from "./propertyListings";
import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    realEstateProcess,
    propertyListings,
  ],
};
