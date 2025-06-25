// Simple routing configuration
export const routes = {
  '/': 'home',
  '/license': 'license',
  '/cookies': 'cookies',
  '/support': 'support'
};

export function handleRoute(path) {
  return routes[path] || 'home';
} 