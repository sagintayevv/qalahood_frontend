import Link from "next/link";
import { CATEGORIES } from "@/constants";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden">
      <img
        src="/qala1.png"
        alt="Qalahood"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex items-end">
        <nav className="p-8 md:p-12 flex flex-col gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/catalog?category=${category.slug}`}
              className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              {category.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
