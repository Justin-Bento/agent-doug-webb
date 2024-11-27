import BackgroundPattern from "@/components/BackgroundPattern";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh space-y-24">
        <section className="relative overflow-hidden">
          <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-gradient-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
          <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
            <h1 className="max-w-3xl text-pretty text-4xl font-medium tracking-tighter text-gray-950 dark:text-white sm:text-6xl">
              Real-Estate Process.
            </h1>
          </div>
        </section>
        <section className="wrapper">{children}</section>
      </main>
      <Footer />
    </>
  );
}
