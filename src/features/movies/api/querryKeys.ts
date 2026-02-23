export const movieKeys = {
  all: ["movies"] as const,
  popular: ["popular"] as const,
  search: (query: string) => [...movieKeys.all, "search", query] as const,
  detail: (id: string) => [...movieKeys.all, "detail", id] as const,
};
