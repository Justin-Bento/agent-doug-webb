import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
