import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await db.post.findUnique({ where: { slug } });
  if (!p || !p.published) return notFound();

  return (
    <main className="container py-12 max-w-3xl">
      <p className="text-brand-600 font-bold">Статья</p>
      <h1 className="text-4xl md:text-5xl font-black mt-2">{p.title}</h1>
      <p className="text-xl text-slate-600 mt-4">{p.excerpt}</p>
      {p.image ? <img src={p.image} alt={p.title} className="mt-8 h-80 w-full rounded-3xl object-cover border" /> : null}
      <article className="card p-6 md:p-8 mt-8 prose"><p>{p.content}</p></article>
    </main>
  );
}
