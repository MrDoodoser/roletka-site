import { db } from '@/lib/db';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { phone } from '@/lib/utils';

function ImageBox({ src, alt, className = 'h-56' }: { src?: string | null; alt: string; className?: string }) {
  if (!src) {
    return <div className={`${className} premium-placeholder flex items-center justify-center font-black`}>Изображение</div>;
  }
  return <img src={src} alt={alt} className={`${className} w-full object-cover`} />;
}

const heroImage = '/uploads/selected/hero-roletka.jpg';
const workImages = [
  '/uploads/selected/item-rollvorota-prom.jpg',
  '/uploads/selected/item-sekcionka-garage.jpg',
  '/uploads/selected/item-reshetki.jpg',
  '/uploads/selected/item-rolstavni-door.jpg',
];

const reviews = [
  {
    name: 'Алексей Морозов',
    place: 'Краснодар, частный дом',
    text: 'Поставили рольставни на окна и дверь. Замер сделали аккуратно, по срокам не подвели, после монтажа всё показали и настроили.',
    initials: 'АМ',
  },
  {
    name: 'Марина Кравцова',
    place: 'Краснодар, магазин',
    text: 'Нужны были роллетные решётки на витрину. Получилось красиво: товар видно, а помещение закрыто и выглядит аккуратно.',
    initials: 'МК',
  },
  {
    name: 'Игорь Сафонов',
    place: 'Краснодарский край, гараж',
    text: 'Заказал секционные ворота с автоматикой. Понравилось, что сразу объяснили разницу по комплектациям и не навязывали лишнее.',
    initials: 'ИС',
  },
];

export default async function Home() {
  const categories = await db.category.findMany({ include: { items: { where: { published: true }, take: 3 } } });
  const posts = await db.post.findMany({ where: { published: true }, take: 3, orderBy: { createdAt: 'desc' } });
  const tel = phone.replace(/\D/g, '');

  return (
    <main>
      <section className="premium-hero conversion-hero overflow-hidden">
        <div className="container grid lg:grid-cols-[1.02fr_.98fr] gap-10 items-center py-16 md:py-24 lg:py-28">
          <div className="relative z-10">
            <span className="section-label">Краснодар • производство и монтаж</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[.92] tracking-tight mt-5">
              Рольставни и ворота, которые защищают и выглядят дорого
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl">
              Подберём конструкцию под ваш объект, аккуратно смонтируем и настроим управление. Работаем с частными домами, гаражами, магазинами, складами и коммерческими фасадами.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a className="btn btn-primary btn-shine" href="#contacts">Получить расчёт</a>
              <a className="btn btn-soft" href={`tel:+${tel}`}>Позвонить: {phone}</a>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-9 max-w-xl">
              {['Замер и консультация', 'Подбор под задачу', 'Монтаж и гарантия'].map((x) => (
                <div className="stat premium-stat" key={x}>
                  <b className="text-2xl text-brand-600">✓</b>
                  <p className="font-black text-sm md:text-base">{x}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual card p-3 md:p-4">
            <div className="hero-media rounded-[28px] overflow-hidden">
              <ImageBox src={heroImage} alt="Рольставни и ворота Роллетка.Ру" className="h-full" />
            </div>
            <div className="hero-floating-card">
              <span>Роллетка.Ру</span>
              <b>Краснодар</b>
              <p>Рольставни • ворота • автоматика</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container -mt-10 relative z-20 pb-10">
        <div className="trust-ribbon card grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 md:p-5">
          {[
            ['10+', 'лет опыта'],
            ['500+', 'выполненных объектов'],
            ['2 года', 'гарантия на монтаж'],
            ['24 часа', 'быстрый предварительный расчёт'],
          ].map(([value, label]) => (
            <div className="trust-item" key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="catalog" className="container py-16 md:py-24">
        <div className="section-head mb-9">
          <div>
            <span className="section-label">Каталог</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Популярные решения</h2>
          </div>
          <p className="text-slate-600 max-w-2xl">
            Карточки сделаны под рекламу: фото, понятная польза, быстрый переход к расчёту и акцент на реальных направлениях работ.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link key={c.id} href={`/catalog/${c.slug}`} className="premium-card sales-card card overflow-hidden group">
              <div className="h-60 overflow-hidden relative">
                <ImageBox src={c.image} alt={c.title} className="h-full group-hover:scale-105 transition duration-700" />
                <div className="image-gradient" />
                <span className="badge absolute left-4 top-4">{c.items.length} позиций</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{c.title}</h3>
                <p className="text-slate-600 mt-2 line-clamp-3">{c.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-black text-brand-600">Смотреть варианты →</p>
                  <span className="mini-arrow">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="ad-offer" className="container pb-6 md:pb-10">
        <div className="ad-offer card p-7 md:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="section-label">Для рекламы</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Получите расчёт по фото проёма</h2>
            <p className="text-slate-600 mt-4 max-w-3xl">Напишите размеры или отправьте фото — подскажем подходящий тип конструкции, примерную стоимость и сроки монтажа по Краснодару.</p>
          </div>
          <a className="btn btn-primary btn-shine" href="#contacts">Оставить заявку</a>
        </div>
      </section>

      <section id="benefits" className="premium-band py-16 md:py-24">
        <div className="container">
          <span className="section-label">Преимущества</span>
          <div className="section-head mt-3 mb-9">
            <h2 className="text-3xl md:text-5xl font-black">Почему это выглядит дороже и служит дольше</h2>
            <p className="text-slate-600 max-w-xl">Упор на аккуратный монтаж, правильную комплектацию и понятную коммуникацию на каждом этапе.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              ['01', 'Точный подбор', 'Смотрим задачу, проём, условия эксплуатации и подбираем конструкцию без переплаты.'],
              ['02', 'Чистый монтаж', 'Аккуратная установка, настройка, проверка хода полотна и автоматики.'],
              ['03', 'Автоматика', 'Пульты, кнопки, приводы и удобное управление для дома и бизнеса.'],
              ['04', 'Сервисность', 'Оставляем понятную информацию по эксплуатации и дальнейшему обслуживанию.'],
            ].map(([n, t, d]) => (
              <div className="card feature-card p-6" key={t}>
                <b className="feature-num">{n}</b>
                <h3 className="font-black text-xl mt-5">{t}</h3>
                <p className="text-slate-600 mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-8 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="section-label">Объекты</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Фото работ и решений</h2>
            <p className="text-slate-600 mt-4">Витрина с крупными фото показывает качество монтажа и помогает клиенту представить похожее решение на своём объекте.</p>
            <a href="#contacts" className="btn btn-primary mt-7">Обсудить похожий проект</a>
          </div>
          <div className="gallery-grid">
            {workImages.map((src, i) => (
              <div className={`card gallery-card overflow-hidden ${i === 0 ? 'sm:row-span-2' : ''}`} key={src}>
                <img src={src} alt={`Работа Роллетка.Ру ${i + 1}`} className="h-full min-h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section py-16 md:py-24">
        <div className="container">
          <div className="section-head mb-9">
            <div>
              <span className="section-label">Отзывы</span>
              <h2 className="text-3xl md:text-5xl font-black mt-3">Клиенты отмечают аккуратность и понятные сроки</h2>
            </div>
            <p className="text-slate-600 max-w-xl">Блок доверия для рекламы: живые формулировки, города и конкретные ситуации без лишней воды.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <article className="review-card card p-6" key={r.name}>
                <div className="flex items-center gap-4">
                  <div className="review-avatar">{r.initials}</div>
                  <div>
                    <h3 className="font-black text-xl">{r.name}</h3>
                    <p className="text-slate-500 text-sm font-bold">{r.place}</p>
                  </div>
                </div>
                <p className="stars mt-5">★★★★★</p>
                <p className="text-slate-600 mt-4 leading-relaxed">“{r.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-process py-16 md:py-24">
        <div className="container grid lg:grid-cols-[.95fr_1.05fr] gap-8 items-start">
          <div>
            <span className="section-label">Процесс</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">От звонка до готовой конструкции</h2>
            <p className="text-slate-600 mt-4">Простая схема работы, которую легко понять клиенту до заявки.</p>
          </div>
          <div className="grid gap-4">
            {['Консультация и предварительный расчёт', 'Выезд на замер и проверка проёма', 'Согласование комплектации и сроков', 'Монтаж, настройка и сдача объекта'].map((x, i) => (
              <div className="glass process-row rounded-3xl p-5 flex gap-4 items-start" key={x}>
                <b className="process-num">{i + 1}</b>
                <div>
                  <h3 className="font-black text-xl">{x}</h3>
                  <p className="text-slate-600 mt-1">На каждом этапе клиент понимает, что происходит дальше и сколько это стоит.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="container py-16 md:py-24">
          <div className="section-head mb-8">
            <div>
              <span className="section-label">Материалы</span>
              <h2 className="text-3xl md:text-5xl font-black mt-3">Полезные статьи</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link className="premium-card card overflow-hidden" href={`/posts/${p.slug}`} key={p.id}>
                {p.image && <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />}
                <div className="p-6"><h3 className="font-black text-2xl">{p.title}</h3><p className="text-slate-600 mt-2">{p.excerpt}</p></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container pb-16 md:pb-20">
        <div className="premium-offer card p-7 md:p-10 grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="section-label">Быстрый старт</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Хотите понять цену без долгой переписки?</h2>
            <p className="text-slate-600 mt-4 max-w-3xl">Оставьте заявку или позвоните — подскажем ориентир по стоимости, срокам и комплектации.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-primary btn-shine" href="#contacts">Рассчитать стоимость</a>
            <a className="btn btn-soft" href={`tel:+${tel}`}>Позвонить</a>
          </div>
        </div>
      </section>

      <section id="contacts" className="container pb-20 md:pb-28">
        <div className="card cta-card overflow-hidden grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <span className="section-label">Заявка</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Рассчитаем стоимость под ваш проём</h2>
            <p className="text-slate-600 mt-4">Укажите телефон и задачу — мы подготовим ориентировочный расчёт и свяжемся с вами для уточнения деталей.</p>
            <div className="grid gap-3 mt-7">
              {['Окна, двери, гаражи и витрины', 'Рольставни, рольворота, секционные ворота', 'Краснодар и Краснодарский край'].map((x) => <div className="glass rounded-2xl p-4 font-bold" key={x}>✓ {x}</div>)}
            </div>
          </div>
          <div className="cta-panel p-7 md:p-10">
            <LeadForm source="Главная: финальная форма" />
          </div>
        </div>
      </section>

      <footer className="footer-premium text-white py-10">
        <div className="container flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <p className="font-black text-2xl">Роллетка.Ру</p>
            <p className="text-white/70 mt-2">Рольставни, ворота и роллетные решётки в Краснодаре</p>
          </div>
          <a className="btn btn-primary" href={`tel:+${tel}`}>{phone}</a>
        </div>
      </footer>

      <a className="mobile-sticky-call" href={`tel:+${tel}`}>Позвонить: {phone}</a>
    </main>
  );
}
