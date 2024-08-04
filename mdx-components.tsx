import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>,
    h2: ({ children }) => <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>,
    h3: ({ children }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>,
    h4: ({ children }) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl text-muted-foreground">{children}</h5>,
    h6: ({ children }) => <h6 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h6>,
    p: ({ children }) => <p className="leading-7">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside space-y-4 mt-4">{children}</ul>,
    ...components,
  };
}
