import { useState, useEffect } from "react";
import Movie from "../components/movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <Movie coverImg={m.medium_cover_image} 
            title={m.title} 
            summary={m.summary}
            genres={m.genres}
            id={m.id}
            key={m.id} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
