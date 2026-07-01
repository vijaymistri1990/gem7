"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbList = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const name = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      "@type": "ListItem",
      position: index + 2,
      name,
      item: `https://gem7aap.com${url}`,
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gem7aap.com/",
      },
      ...breadcrumbList,
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="breadcrumb" className="py-4 text-sm text-gray-500 max-w-7xl mx-auto px-5">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const name = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());
            const isLast = index === pathSegments.length - 1;

            return (
              <li key={url} className="flex items-center space-x-2">
                <span className="text-gray-400">/</span>
                {isLast ? (
                  <span className="text-slate-800 font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link href={url} className="hover:text-[var(--color-primary)] transition-colors">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
