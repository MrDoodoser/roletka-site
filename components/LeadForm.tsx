'use client';
import { useState } from 'react';

export function LeadForm({ source = 'Форма сайта' }: { source?: string }) {
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        name: fd.get('name'),
        phone: fd.get('phone'),
        message: fd.get('message'),
        source,
      }),
      headers: { 'content-type': 'application/json' },
    });

    if (res.ok) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={submit} className="lead-form grid gap-3">
      <input name="name" required placeholder="Ваше имя" />
      <input name="phone" required placeholder="Телефон" />
      <textarea name="message" rows={4} placeholder="Что нужно изготовить? Размеры, адрес, пожелания" />
      <p className="text-xs text-slate-500 leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-brand-600">политикой конфиденциальности</a>
        {" "}и даёте согласие на обработку персональных данных.
      </p>
      <button className="btn btn-primary" disabled={sent}>{sent ? 'Заявка отправлена' : 'Получить расчёт'}</button>
      {sent && <p className="text-sm text-green-600 font-bold">Спасибо! Мы получили заявку и свяжемся с вами.</p>}
    </form>
  );
}
