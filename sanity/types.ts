/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type PropertyListings = {
  _id: string;
  _type: "propertyListings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  Statement?: string;
  Price?: number;
  publishedAt?: string;
  listingInformation?: {
    features?: Array<string>;
    location?: {
      address?: string;
      city?: string;
      country?: string;
      zipcode?: string;
    };
    areaAndLot?: {
      indoors?: string;
      outdoors?: string;
    };
    financial?: string;
    additionalImages?: {
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      alt?: string;
    };
  };
};

export type RealEstateProcess = {
  _id: string;
  _type: "realEstateProcess";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | PropertyListings | RealEstateProcess | Post | Author | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: PROPERTY_LISTINGS_ALL_QUERY
// Query: *[_type == "propertyListings"] {  _id,  title,  slug {    current  },  Price,  Statement,  publishedAt,  mainImage{    asset->{      _id,      url    }  }}
export type PROPERTY_LISTINGS_ALL_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: {
    current: string | null;
  } | null;
  Price: number | null;
  Statement: string | null;
  publishedAt: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
    } | null;
  } | null;
}>;
// Variable: PROPERTY_LISTINGS_BY_SLUG_QUERY
// Query: *[_type == "propertyListings" && slug.current == $slug][0] {    _id,    title,     Price,    Statement,    mainImage {      asset -> {        _id,         url      }    },    listingInformation  }
export type PROPERTY_LISTINGS_BY_SLUG_QUERYResult = {
  _id: string;
  title: string | null;
  Price: number | null;
  Statement: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
    } | null;
  } | null;
  listingInformation: {
    features?: Array<string>;
    location?: {
      address?: string;
      city?: string;
      country?: string;
      zipcode?: string;
    };
    areaAndLot?: {
      indoors?: string;
      outdoors?: string;
    };
    financial?: string;
    additionalImages?: {
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      alt?: string;
    };
  } | null;
} | null;
// Variable: REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERY
// Query: *[_type == "realEstateProcess" && $keyword in categories[]->slug.current] {  _id,  title,  slug,  categories[]-> {  title,  slug  }  }
export type REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  categories: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
}>;
// Variable: REAL_ESTATE_PROCESS_SELLING_POSTS_QUERY
// Query: *[_type == "realEstateProcess" && "selling" in categories[]->slug.current] {  _id,  title,  slug,  categories[]-> {  title,  slug  }  }
export type REAL_ESTATE_PROCESS_SELLING_POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  categories: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
}>;
// Variable: REAL_ESTATE_PROCESS_MORE_STUFF_POSTS_QUERY
// Query: *[_type == "realEstateProcess" && "more-stuff" in categories[]->slug.current] {  _id,  title,  slug,  categories[]-> {  title,  slug  }  }
export type REAL_ESTATE_PROCESS_MORE_STUFF_POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  categories: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
}>;
// Variable: REAL_ESTATE_PROCESS_ADDITIONAL_INFO_POSTS_QUERY
// Query: *[_type == "realEstateProcess" && "additional-information" in categories[]->slug.current] {    _id,    title,    slug,    categories[]-> {      title,      slug    }  }
export type REAL_ESTATE_PROCESS_ADDITIONAL_INFO_POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  categories: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
}>;
// Variable: REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERY
// Query: *[_type == "realEstateProcess" && slug.current == $slug][0] {    _id,    title,    body,    mainImage  }
export type REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERYResult = {
  _id: string;
  title: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "  *[_type == \"propertyListings\"] {\n  _id,\n  title,\n  slug {\n    current\n  },\n  Price,\n  Statement,\n  publishedAt,\n  mainImage{\n    asset->{\n      _id,\n      url\n    }\n  }\n}\n": PROPERTY_LISTINGS_ALL_QUERYResult;
    "*[_type == \"propertyListings\" && slug.current == $slug][0] {\n    _id,\n    title, \n    Price,\n    Statement,\n    mainImage {\n      asset -> {\n        _id, \n        url\n      }\n    },\n    listingInformation\n  }\n": PROPERTY_LISTINGS_BY_SLUG_QUERYResult;
    "\n  *[_type == \"realEstateProcess\" && $keyword in categories[]->slug.current] {\n  _id,\n  title,\n  slug,\n  categories[]-> {\n  title,\n  slug\n  }\n  }\n ": REAL_ESTATE_PROCESS_POSTS_BY_CATEGORY_QUERYResult;
    "\n  *[_type == \"realEstateProcess\" && \"selling\" in categories[]->slug.current] {\n  _id,\n  title,\n  slug,\n  categories[]-> {\n  title,\n  slug\n  }\n  }\n ": REAL_ESTATE_PROCESS_SELLING_POSTS_QUERYResult;
    "\n  *[_type == \"realEstateProcess\" && \"more-stuff\" in categories[]->slug.current] {\n  _id,\n  title,\n  slug,\n  categories[]-> {\n  title,\n  slug\n  }\n  }\n ": REAL_ESTATE_PROCESS_MORE_STUFF_POSTS_QUERYResult;
    "\n  *[_type == \"realEstateProcess\" && \"additional-information\" in categories[]->slug.current] {\n    _id,\n    title,\n    slug,\n    categories[]-> {\n      title,\n      slug\n    }\n  }\n": REAL_ESTATE_PROCESS_ADDITIONAL_INFO_POSTS_QUERYResult;
    "\n  *[_type == \"realEstateProcess\" && slug.current == $slug][0] {\n    _id,\n    title,\n    body,\n    mainImage\n  }\n": REAL_ESTATE_PROCESS_ARTICLE_BY_SLUG_QUERYResult;
  }
}
