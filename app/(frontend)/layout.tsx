import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <SanityLive />
      </ThemeProvider>
      <Footer />
    </>
  );
}
