import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-6">
      <div className="relative rounded-3xl overflow-hidden bg-gray-200 h-100 flex items-center">
        <img
          src="/hero.jpg"
          alt="Qalahood merch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 pl-12 max-w-sm">
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
            Скидка на первый заказ до -30%
          </h1>

          <Link
            href="/catalog"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Смотреть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
