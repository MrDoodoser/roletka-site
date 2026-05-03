import { PublicHeader } from '@/components/PublicHeader';
import { phone } from '@/lib/utils';
import { PremiumLogo } from '@/components/PremiumLogo';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const tel = phone.replace(/\D/g, '');
  return (
    <>
      <PublicHeader />
      {children}
      <a className="mobile-sticky-call" href={`tel:+${tel}`}>Позвонить: {phone}</a>
      <footer className="footer-premium text-white py-10">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="footer-logo"><PremiumLogo /></div>
            <p className="text-white/70 mt-3">Рольставни, рольворота, секционные ворота и защитные конструкции в Краснодаре.</p>
          </div>
          <div>
            <b>Навигация</b>
            <p className="mt-2"><a className="text-white/70 hover:text-white" href="/#catalog">Каталог</a></p>
            <p><a className="text-white/70 hover:text-white" href="/#benefits">Преимущества</a></p>
            <p><a className="text-white/70 hover:text-white" href="/#works">Работы</a></p>
            <p><a className="text-white/70 hover:text-white" href="/#contacts">Контакты</a></p>
            <p><a className="text-white/70 hover:text-white" href="/privacy">Политика конфиденциальности</a></p>
          </div>
          <div>
            <b>Связаться</b>
            <p className="mt-2"><a className="text-white/70 hover:text-white" href={`tel:+${tel}`}>{phone}</a></p>
            <p className="text-white/50 text-sm mt-3">Краснодар и Краснодарский край. Изготовление и монтаж под ключ.</p>
            <p className="text-white/40 text-xs mt-3">Нажимая кнопки на сайте, пользователь соглашается с обработкой персональных данных.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
