import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';import { adminPath } from '@/lib/adminPath';
const COOKIE = 'admin_session';
export async function isAdmin() { return (await cookies()).get(COOKIE)?.value === process.env.ADMIN_PASSWORD; }
export async function requireAdmin() { if (!(await isAdmin())) redirect(adminPath('?login=1')); }
export async function setAdminSession(password: string) { (await cookies()).set(COOKIE, password, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*7 }); }
export async function clearAdminSession() { (await cookies()).delete(COOKIE); }
