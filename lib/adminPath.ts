export function adminPath(path = '') {
  const base = process.env.ADMIN_PATH || '/site-panel-2026';
  const cleanBase = base.startsWith('/') ? base : `/${base}`;
  if (!path) return cleanBase;
  if (path.startsWith('?')) return `${cleanBase}${path}`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
