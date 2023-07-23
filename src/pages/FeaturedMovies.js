import { useDispatch, useSelector } from "react-redux"
import { clearFavourites } from "../features/movies/moviesSlice";
import MoviesItem from "../components/MoviesItem";

export default function FeaturedMovies() {
  const dispatch = useDispatch();
  const {featuredMovies} = useSelector((state)=> state.movies);
  return (
    <section className="featured__body f-movies">
        <h2 className="featured__subtitle">Movies</h2>
        <button className="featured__clear" onClick={()=>dispatch(clearFavourites())}> Clear favourite movies </button>
        <div className="featured__items">
        <div className="featured__items">
            {featuredMovies.map(elem=> <MoviesItem data={elem} page={false} featured={true}/>)}
        </div>
        </div>
    </section>
  )
}