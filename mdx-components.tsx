import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-black dark:text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-black dark:text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-black dark:text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-black dark:text-white">{children}</h4>,
    h5: ({ children }) => <h5 className="text-black dark:text-white">{children}</h5>,
    h6: ({ children }) => <h6 className="text-black dark:text-white">{children}</h6>,
    p: ({ children }) => (
      <p className="text-base/8 tracking-wide font-sans text-balance text-black dark:text-white">{children}</p>
    ),
    small: ({ children }) => <small className="text-sm font-medium leading-none">{children}</small>,
    strong: ({ children }) => (
      <strong className="block my-5 text-lg font-semibold text-black dark:text-white">{children}</strong>
    ),
    ul: ({ children }) => <ul className="list-disc my-5 list-outside text-black dark:text-white">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal my-5 list-outside text-black dark:text-white">{children}</ol>,
    li: ({ children }) => <li className="my-5 text-black dark:text-white">{children}</li>,
    a: ({ children }) => <a className="text-black underline dark:text-white">{children}</a>,
    blockquote: ({ children }) => <blockquote className="block text-black dark:text-white">{children}</blockquote>,
    ...components,
  };
}
