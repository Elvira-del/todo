export function getLocalStorage<T>(key: string) {
  const stored = localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as T) : undefined;
}

export function setLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
