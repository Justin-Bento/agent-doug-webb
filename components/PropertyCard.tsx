import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PostArticle = {
  _id: string;
  slug: { current: string };
  statement: string;
  price: number;
  title: string;
  mainImage: string;
  projectCode: string;
  liveDemo: string;
};

export default function PropertyCard({ post }: { post: PostArticle }) {
  return (
    <Card key={post._id} className="ring-1 ring-black/10 rounded-xl bg-transparent">
      <CardHeader className="relative aspect-[16/10] p-0 pb-6 overflow-hidden">
        <Image
          fill
          src={urlFor(post.mainImage).url() || ""}
          alt={post.title || "Property"}
          className="object-cover object-center rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-sm/6">{post.price}</p>
        <p className="mt-1 text-2xl/8 font-medium capitalize text-gray-950 dark:text-white">{post.title}</p>
        <p className="mt-2 text-base/6 text-black/60 dark:text-white/60 line-clamp-3">{post.statement}</p>
        <Link href={`listings/${post._id}`}>
          <Button variant="outline" size="sm" className="flex items-center gap-1 mt-4 bg-transparent">
            View Property<span aria-hidden="true">→</span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
