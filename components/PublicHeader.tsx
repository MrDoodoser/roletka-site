import Link from 'next/link';
import { phone } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PremiumLogo } from '@/components/PremiumLogo';

export function PublicHeader() {
  const tel = phone.replace(/\D/g, '');
  return (
    <header className="sticky top-0 z-40 site-header">
      <div className="container flex items-center justify-between py-4 gap-4">
        <Link href="/" className="logo-link" aria-label="Роллетка.Ру — на главную">
          <PremiumLogo />
        </Link>
        <nav className="hidden md:flex gap-7 text-sm font-extrabold nav-links">
          <a href="/#catalog">Каталог</a>
          <a href="/#benefits">Преимущества</a>
          <a href="/#works">Работы</a>
          <a href="/#contacts">Контакты</a>
        </nav>
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <a className="btn btn-primary header-phone" href={`tel:+${tel}`}>{phone}</a>
        </div>
      </div>
    </header>
  );
}
