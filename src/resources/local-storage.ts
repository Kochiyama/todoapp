export function get<T>(id: string): T | undefined {
  const item = window.localStorage.getItem(id);
  if (!item) return;
  return JSON.parse(item) as T;
}

export function set<T>(id: string, data: T) {
  const parsed = JSON.stringify(data);
  window.localStorage.setItem(id, parsed);
}
