export function slugify(input: string) {
  return input.toLowerCase().trim().replace(/ё/g,'e').replace(/й/g,'i').replace(/[а-я]/g, c => ({а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ж:'zh',з:'z',и:'i',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'c',ч:'ch',ш:'sh',щ:'sch',ы:'y',э:'e',ю:'yu',я:'ya',ь:'',ъ:''}[c] || c)).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
export const phone = process.env.NEXT_PUBLIC_SITE_PHONE || '+7 (989) 271-51-11';
export const whatsapp = process.env.NEXT_PUBLIC_SITE_WHATSAPP || '79892715111';
