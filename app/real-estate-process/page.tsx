import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RealEstateTransaction() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto min-h-dvh px-4 py-5 sm:p-6">
        <div className="flex min-h-dvh gap-9">
          <div className="bg-gray-200 w-64 flex-none">
            <p className="">Side Navigation</p>
          </div>
          <div className="w-full bg-gray-200">
            <h1>Hello, Real-Estate Transaction Page!</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
