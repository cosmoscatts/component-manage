export function getCurrentEnvMode() {
  return import.meta.env.MODE
}

export function isDevelopment() {
  return getCurrentEnvMode() === 'development'
}

export function isProduction() {
  return getCurrentEnvMode() === 'production'
}

export function getCurrentApiUrl() {
  if (isProduction() && !isEmpty(window.g.url)) return window.g.url
  return import.meta.env.VITE_BASE_API_URL as string
}
