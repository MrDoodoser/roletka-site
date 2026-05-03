import { AdminNav } from '@/components/AdminNav';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <main className="container py-8 grid lg:grid-cols-[240px_1fr] gap-6"><AdminNav /> <section>{children}</section></main>;
}
