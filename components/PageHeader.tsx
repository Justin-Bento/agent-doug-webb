import BackgroundPattern from "./BackgroundPattern";

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({title}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <BackgroundPattern className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-linear-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent" />
      <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
        <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
