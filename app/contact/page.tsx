import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navigation from "../../components/Navigation";

export default function Contact() {
  let title: string = "Hello, Contact Page!"
  let message: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloribus aspernatur tenetur officiis quasi numquam eos qui praesentium, at placeat eligendi reiciendis dicta similique sapiente porro quis tempore voluptatibus aliquam?"
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <Heading heading={title} supporting={message} />
      </main>
      <Footer />
    </>
  );
}
