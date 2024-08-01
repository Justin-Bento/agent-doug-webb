import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function about() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <Heading heading="Hello, About Page!" supporting="lorem" />
      </main>
      <Footer />
    </>
  );
}
