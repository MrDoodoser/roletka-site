import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Конструкции под ключ', description: 'Ворота, навесы, ограждения и другие конструкции под ключ' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ru" data-theme="dark" suppressHydrationWarning><body>{children}</body></html>; }
