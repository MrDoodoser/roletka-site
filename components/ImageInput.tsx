'use client';

import { useState } from 'react';

type Props = {
  name?: string;
  defaultValue?: string | null;
  label?: string;
};

export default function ImageInput({ name = 'image', defaultValue = '', label = 'Картинка' }: Props) {
  const [url, setUrl] = useState(defaultValue || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function upload(file: File) {
    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/admin/upload', { method: 'POST', body: formData });
    const data = await response.json();

    if (!response.ok) {
      setError(data?.error || 'Не удалось загрузить файл');
      setLoading(false);
      return;
    }

    setUrl(data.url);
    setLoading(false);
  }

  return (
    <div className="grid gap-2">
      <label className="text-sm font-bold text-slate-700">{label}</label>
      <input type="hidden" name={name} value={url} />
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="URL или загруженный файл"
        />
        <label className="btn cursor-pointer text-center whitespace-nowrap">
          {loading ? 'Загрузка...' : 'Загрузить фото'}
          <input
            className="hidden"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) upload(file);
            }}
          />
        </label>
      </div>
      {url ? (
        <img src={url} alt="Превью" className="h-24 w-36 rounded-xl object-cover border" />
      ) : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
