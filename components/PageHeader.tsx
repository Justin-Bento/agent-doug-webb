type PageHeaderProps = {
  title: string;
};
const BackgroundSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      className="w-full max-h-[20dvh] xl:max-h-72 z-10 bg-linear-to-b from-accent/60 from-10% dark:from-accent/40 to-transparent"
    >
      <g mask="url(#SvgjsMask1132)" fill="none">
        <path
          d="M1440 0L1228.21 0L1440 224.22z"
          fill="black"
          fillOpacity="0.1"
        />
        <path
          d="M1228.21 0L1440 224.22L1440 371.44L1176.76 0z"
          fill="black"
          fillOpacity="0.075"
        />
        <path
          d="M1176.76 0L1440 371.44L1440 456.11L533.28 0z"
          fill="black"
          fillOpacity="0.05"
        />
        <path
          d="M533.28 0L1440 456.11L1440 485.98L375.46 0z"
          fill="black"
          fillOpacity="0.025"
        />
        <path d="M0 560L92.21 560L0 540.7z" fill="black" fillOpacity="0.1" />
        <path
          d="M0 540.7L92.21 560L499.43 560L0 328.86z"
          fill="black"
          fillOpacity="0.075"
        />
        <path
          d="M0 328.86L499.43 560L557.51 560L0 203.87z"
          fill="black"
          fillOpacity="0.05"
        />
        <path
          d="M0 203.87L557.51 560L1072.49 560L0 138.59z"
          fill="black"
          fillOpacity="0.025"
        />
      </g>
      <defs>
        <mask id="SvgjsMask1132">
          <rect width="1440" height="560" fill="#ffffff" />
        </mask>
      </defs>
    </svg>
  );
};
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <BackgroundSVG />
      <div className="wrapper absolute inset-0 z-20 flex flex-col items-start justify-center">
        <h1 className="max-w-3xl text-pretty text-4xl font-medium text-gray-950 dark:text-white sm:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
