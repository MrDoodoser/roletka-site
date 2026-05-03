# Ролетка.ру — Next.js сайт с админкой

## Запуск

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Сайт: http://localhost:3000

Админка скрыта: http://localhost:3000/site-panel-2026

Логин/пароль меняются в `.env`:

```env
ADMIN_LOGIN="admin"
ADMIN_PASSWORD="change-me-strong-password"
ADMIN_PATH="/site-panel-2026"
```

## Что добавлено в этой версии

- Бренд: Ролетка.ру
- Город: Краснодар
- Телефон в шапке: +7 989 271-51-11
- Фото из архива разложены по каталогу
- Категории: рольставни, рольворота, секционные ворота, роллетные решётки
- Улучшенная главная страница
- Админка остаётся скрытой по адресу из `.env`

Важно: `npm run db:seed` перезаписывает тестовые категории/позиции/посты в базе.

## V11 Premium Conversion Pro
Добавлены отзывы, рекламный CTA-блок, усиленные карточки конструкций и дополнительные conversion-блоки.
