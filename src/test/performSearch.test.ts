import performSearch from "../lib/perfromSearch";
import type { Movie } from "@/type";

describe("performSearch", () => {
  const movies: Movie[] = [
    { id: 1, title: "The Shawshank Redemption", poster_path: "" },
    { id: 2, title: "The Godfather", poster_path: "" },
    { id: 3, title: "The Dark Knight", poster_path: "" },
  ];
  test("returns empty array when query is empty", () => {
    const result = performSearch("", movies);
    expect(result.data).toEqual([]);
  });
  test("returns empty array when query is whitespace", () => {
    const result = performSearch("   ", movies);
    expect(result.data).toEqual([]);
  });
  test("returns matching movies for valid query", () => {
    const result = performSearch("godfather", movies);
    expect(result.data).toEqual([
      { id: 2, title: "The Godfather", poster_path: "" },
    ]);
  });
  test("returns multiple matches for partial query", () => {
    const result = performSearch("the", movies);
    expect(result.data).toEqual(movies);
  });
  test("returns empty array when no matches found", () => {
    const result = performSearch("xyz", movies);
    expect(result.data).toEqual([]);
  });
});
