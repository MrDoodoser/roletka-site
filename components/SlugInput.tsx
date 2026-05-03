'use client';

const alphabet: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
  х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .split('')
    .map((char) => alphabet[char] ?? char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

type Props = {
  titleName?: string;
  slugName?: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function SlugInput({
  titleName = 'title',
  slugName = 'slug',
  defaultValue = '',
  placeholder = 'slug',
}: Props) {
  function generateSlug(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.closest('form');
    if (!form) return;

    const titleInput = form.elements.namedItem(titleName) as HTMLInputElement | null;
    const slugInput = form.elements.namedItem(slugName) as HTMLInputElement | null;

    if (!titleInput || !slugInput) return;
    slugInput.value = makeSlug(titleInput.value);
  }

  return (
    <div className="flex gap-2">
      <input name={slugName} defaultValue={defaultValue} placeholder={placeholder} />
      <button className="btn" type="button" onClick={generateSlug}>
        Авто slug
      </button>
    </div>
  );
}
