import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl tracking-tight font-extrabold first:mt-0 dark:text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>,
    h4: ({ children }) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl text-muted-foreground">{children}</h5>,
    h6: ({ children }) => <h6 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h6>,
    p: ({ children }) => <p className="leading-7">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside text-gray-800 my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    a: ({ children }) => <a className="underline text-primary-600">{children}</a>,
    blockquote : ({ children }) => <blockquote  className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>,
    ...components,
  };
}
