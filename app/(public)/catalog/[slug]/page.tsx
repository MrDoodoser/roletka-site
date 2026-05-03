import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import { LeadForm } from '@/components/LeadForm';
import { phone } from '@/lib/utils';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = await db.category.findUnique({ where: { slug }, include: { items: { where: { published: true } } } });
  if (!c) return notFound();
  const tel = phone.replace(/\D/g, '');

  return (
    <main>
      <section className="hero-grid py-14 md:py-20">
        <div className="container grid lg:grid-cols-[1fr_.8fr] gap-8 items-center">
          <div>
            <span className="section-label">Каталог Роллетка.Ру</span>
            <h1 className="text-4xl md:text-6xl font-black mt-3 tracking-tight">{c.title}</h1>
            <p className="text-lg text-slate-600 mt-5 max-w-3xl">{c.description}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a className="btn btn-primary btn-shine" href="#category-lead">Рассчитать {c.title.toLowerCase()}</a>
              <a className="btn btn-soft" href={`tel:+${tel}`}>Позвонить</a>
            </div>
          </div>
          <div className="card p-4">
            {c.image ? <img src={c.image} alt={c.title} className="h-72 w-full object-cover rounded-[22px]" /> : <div className="h-72 rounded-[22px] bg-brand-100" />}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-7 items-start">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {c.items.map((i) => (
              <article className="premium-card item-sales-card card overflow-hidden" key={i.id}>
                <div className="relative h-64 overflow-hidden">
                  {i.image ? (
                    <img src={i.image} alt={i.title} className="h-full w-full object-cover transition duration-700" />
                  ) : (
                    <div className="h-full bg-brand-100 flex items-center justify-center text-brand-600 font-black">Изображение</div>
                  )}
                  <div className="image-gradient" />
                  {i.priceFrom && <span className="price-pill">от {i.priceFrom.toLocaleString('ru-RU')} ₽</span>}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-black">{i.title}</h2>
                  <p className="text-slate-600 mt-2">{i.short}</p>
                  <div className="grid gap-2 mt-5 text-sm font-bold text-slate-600">
                    <span>✓ Подбор под размер проёма</span>
                    <span>✓ Монтаж и настройка</span>
                    <span>✓ Возможна автоматика</span>
                  </div>
                  <div className="prose mt-4 text-slate-700"><p>{i.content}</p></div>
                  <a href="#category-lead" className="btn btn-primary btn-shine mt-5 w-full justify-center">Рассчитать эту конструкцию</a>
                </div>
              </article>
            ))}
          </div>
          <aside id="category-lead" className="card p-6 h-fit sticky top-24">
            <span className="badge">Быстрый расчёт</span>
            <h2 className="text-2xl font-black mt-3 mb-4">Рассчитать {c.title.toLowerCase()}</h2>
            <LeadForm source={`Категория: ${c.title}`} />
          </aside>
        </div>
      </section>
    </main>
  );
}
