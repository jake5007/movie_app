"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/utils";
import { Loading, MovieCard } from "@/components";

export default function Home() {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await fetchData();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center p-24 mt-5">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.originalTitleText.text}
              image={movie.primaryImage?.url}
              genres={movie.genres.genres}
              plot={movie.plot?.plotText?.plainText}
              releaseYear={movie.releaseYear.year}
            />
          ))}
        </div>
      )}
    </main>
  );
}
