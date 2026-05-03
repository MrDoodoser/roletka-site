import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <p className="text-brand-600 font-bold">404</p>
      <h1 className="text-4xl md:text-5xl font-black mt-2">Страница не найдена</h1>
      <p className="text-slate-600 mt-4">Проверьте адрес страницы или вернитесь на главную.</p>
      <Link className="btn btn-primary mt-8" href="/">На главную</Link>
    </main>
  );
}
