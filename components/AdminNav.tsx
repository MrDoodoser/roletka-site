import Link from 'next/link';
import { adminPath } from '@/lib/adminPath';

export function AdminNav() {
  const links = [
    ['', 'Главная'],
    ['/categories', 'Категории'],
    ['/items', 'Конструкции'],
    ['/posts', 'Посты'],
    ['/leads', 'Заявки'],
  ];

  return (
    <aside className="card p-4 h-fit sticky top-24">
      <div className="font-black text-xl mb-1">Панель</div>
      <p className="text-xs text-slate-500 mb-4">Закрытая админка</p>
      <nav className="grid gap-2">
        {links.map(([href, label]) => (
          <Link key={href} href={adminPath(href)} className="rounded-xl px-3 py-2 hover:bg-brand-50 font-semibold">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
