import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6 my-16">
        <section id="header">
          <h1 className="text-4xl tracking-tight font-extrabold capitalize dark:text-white mb-3">
            Hello, Contact Page!
          </h1>
          <p className="text-balance">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            doloribus aspernatur tenetur officiis quasi numquam eos qui
            praesentium, at placeat eligendi reiciendis dicta similique sapiente
            porro quis tempore voluptatibus aliquam?
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
