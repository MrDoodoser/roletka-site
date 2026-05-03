import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

const img = (name: string) => `/uploads/selected/${name}`;

async function main() {
  await db.lead.deleteMany();
  await db.item.deleteMany();
  await db.post.deleteMany();
  await db.category.deleteMany();

  const rolstavni = await db.category.create({ data: {
    title: 'Рольставни',
    slug: 'rolstavni',
    description: 'Защитные роллеты на окна, двери, витрины и проёмы. Подбираем профиль, цвет, управление и комплектацию под объект.',
    image: img('category-rolstavni.jpg')
  }});

  const rollvorota = await db.category.create({ data: {
    title: 'Рольворота',
    slug: 'rollvorota',
    description: 'Компактные рулонные ворота для гаражей, складов и коммерческих помещений. Экономят место и аккуратно выглядят на фасаде.',
    image: img('category-rollvorota.jpg')
  }});

  const sekcionnye = await db.category.create({ data: {
    title: 'Секционные ворота',
    slug: 'sekcionnye-vorota',
    description: 'Гаражные и промышленные секционные ворота с автоматикой, утеплёнными панелями и профессиональным монтажом.',
    image: img('category-sekcionnye.jpg')
  }});

  const reshetki = await db.category.create({ data: {
    title: 'Роллетные решётки',
    slug: 'rolletnye-reshetki',
    description: 'Прозрачная защита для магазинов, торговых зон и витрин: безопасность без потери обзора.',
    image: img('category-reshetki.jpg')
  }});

  await db.item.createMany({ data: [
    {
      title: 'Рольставни на окна', slug: 'rolstavni-na-okna',
      short: 'Защита окон от солнца, взлома, ветра и посторонних взглядов.',
      content: 'Изготавливаем рольставни под размер проёма. Возможны ручное управление, электропривод, разные цвета и типы профиля.',
      priceFrom: 8900, image: img('item-rolstavni-okna.jpg'), categoryId: rolstavni.id
    },
    {
      title: 'Рольставни на двери и проёмы', slug: 'rolstavni-na-dveri',
      short: 'Практичное решение для входных групп, технических помещений и коммерции.',
      content: 'Подбираем профиль по прочности, делаем аккуратный монтаж и настраиваем управление.',
      priceFrom: 12500, image: img('item-rolstavni-door.jpg'), categoryId: rolstavni.id
    },
    {
      title: 'Перфорированные роллеты', slug: 'perforirovannye-rollety',
      short: 'Защита витрин с частичным обзором и светопропусканием.',
      content: 'Хороший вариант для магазинов и офисов, где важно сохранить визуальный контакт с витриной.',
      priceFrom: 14500, image: img('item-perforacia.jpg'), categoryId: rolstavni.id
    },
    {
      title: 'Рольворота для гаража', slug: 'rollvorota-dlya-garazha',
      short: 'Компактные ворота, которые сворачиваются в короб над проёмом.',
      content: 'Подойдут там, где нет места для распашных или секционных ворот. Можно добавить автоматику и пульты.',
      priceFrom: 42000, image: img('item-rollvorota-garage.jpg'), categoryId: rollvorota.id
    },
    {
      title: 'Промышленные рольворота', slug: 'promyshlennye-rollvorota',
      short: 'Решения для складов, боксов, производственных и коммерческих объектов.',
      content: 'Учитываем размеры, частоту открывания, ветровую нагрузку и требования к управлению.',
      priceFrom: 69000, image: img('item-rollvorota-prom.jpg'), categoryId: rollvorota.id
    },
    {
      title: 'Гаражные секционные ворота', slug: 'garazhnye-sekcionnye-vorota',
      short: 'Тёплые ворота для частного гаража с аккуратным внешним видом.',
      content: 'Подберём цвет, фактуру панелей, автоматику, калитку или окна при необходимости.',
      priceFrom: 65000, image: img('item-sekcionka-garage.jpg'), categoryId: sekcionnye.id
    },
    {
      title: 'Промышленные секционные ворота', slug: 'promyshlennye-sekcionnye-vorota',
      short: 'Надёжные ворота для СТО, складов, производств и автопарков.',
      content: 'Проектируем под интенсивную эксплуатацию, большие размеры и особенности помещения.',
      priceFrom: 98000, image: img('item-sekcionka-prom.jpg'), categoryId: sekcionnye.id
    },
    {
      title: 'Панорамные ворота', slug: 'panoramnye-vorota',
      short: 'Светопрозрачные секционные ворота для шоурумов, моек и коммерческих объектов.',
      content: 'Дают больше света и выглядят современно. Подходят для фасадов, где важна презентабельность.',
      priceFrom: 120000, image: img('item-panorama.jpg'), categoryId: sekcionnye.id
    },
    {
      title: 'Роллетные решётки для витрин', slug: 'rolletnye-reshetki-dlya-vitrin',
      short: 'Защищают витрину и оставляют товар видимым после закрытия.',
      content: 'Используются в ТЦ, магазинах, кафе и офисах. Возможна установка автоматики.',
      priceFrom: 39000, image: img('item-reshetki.jpg'), categoryId: reshetki.id
    },
    {
      title: 'Экструдированные защитные роллеты', slug: 'ekstrudirovannye-rollety',
      short: 'Усиленный профиль для объектов с повышенными требованиями к защите.',
      content: 'Подходят для первых этажей, коммерческих помещений и объектов, где важна прочность.',
      priceFrom: 17500, image: img('item-ekstrudia.jpg'), categoryId: rolstavni.id
    },
    {
      title: 'Классические роллеты', slug: 'klassicheskie-rollety',
      short: 'Базовое универсальное решение для дома, дачи и небольшого бизнеса.',
      content: 'Оптимальный баланс цены, внешнего вида и защиты. Доступны разные цвета и варианты управления.',
      priceFrom: 7900, image: img('item-klassika.jpg'), categoryId: rolstavni.id
    }
  ]});

  await db.post.createMany({ data: [
    {
      title: 'Как выбрать рольставни для дома или магазина',
      slug: 'kak-vybrat-rolstavni',
      excerpt: 'Коротко о профилях, управлении, цветах и том, на что обратить внимание перед заказом.',
      content: 'При выборе рольставней важно учитывать размер проёма, уровень защиты, тип управления и условия эксплуатации. Для окон часто подходят лёгкие профили, для коммерческих объектов — усиленные решения.',
      image: img('item-rolstavni-okna.jpg'),
      published: true
    },
    {
      title: 'Рольворота или секционные ворота: что выбрать',
      slug: 'rollvorota-ili-sekcionnye-vorota',
      excerpt: 'Разбираем, когда лучше выбрать компактные рольворота, а когда секционные ворота.',
      content: 'Рольворота экономят место и хорошо подходят для простых проёмов. Секционные ворота чаще выбирают для тёплых гаражей и объектов, где важны теплоизоляция и внешний вид.',
      image: img('item-sekcionka-garage.jpg'),
      published: true
    }
  ]});
}

main().finally(() => db.$disconnect());
