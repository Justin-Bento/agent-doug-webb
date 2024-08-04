interface BlogHeaderProps {
  Title: string;
  Description: string;
}
export default function BlogHeader({ Title, Description }: BlogHeaderProps) {
  return (
    <section className="">
      <h1 className="scroll-m-20 text-4xl font-bold capitalize tracking-tight">
        {Title}
      </h1>
      <p className="leading-6 line-clamp-2 mt-2 mb-6">
        {Description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt optio cupiditate. Doloribus, dolor. Quod, fugiat, alias voluptatibus quo magnam debitis illo eos suscipit velit, blanditiis aperiam. Consectetur, est ipsa qui accusantium sequi rem accusamus vero illum quae ad corrupti."}
      </p>
      <div className="border-b border-gray-500"></div>
    </section>
  );
}
