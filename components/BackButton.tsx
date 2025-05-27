// app/components/ServerBackButton.tsx
import Link from "next/link";
import { headers } from "next/headers";

export default function ServerBackButton({
  fallbackHref,
  label,
}: {
  fallbackHref: string;
  label?: string;
}) {
  const referer = headers().get("referer");
  const isSameOrigin = referer?.startsWith(
    process.env.NEXT_PUBLIC_SITE_URL || ""
  );

  return (
    <Link
      href={isSameOrigin ? referer! : fallbackHref}
      className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
    >
      ← {label || "Back"}
    </Link>
  );
}
