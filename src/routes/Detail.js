import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    const movie = json.data.movie;
    setMovie(movie);
  }
  console.log(movie);
  
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>detail page</h1>
      <h2>{movie? movie.title:null}</h2>
      <img src={movie? movie.medium_cover_image:null} />
    </div>
  );
}

export default Detail;
