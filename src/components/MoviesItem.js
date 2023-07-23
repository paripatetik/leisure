import { Link } from "react-router-dom";
import { addToFavourites, removeFromFavourites } from "../features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import imgMovie from '../assests/img-movie.jpg';


export default function MoviesItem({data, page, featured}) {
    const dispatch = useDispatch();
   
    
return (
    <div className="movie__item item-movies">
        <img className="item-movies__img" src={data.Poster ==='N/A' ? imgMovie: data.Poster} alt={data.Title}/>
        
        {page ? 
        <div className="item-movies__detailedinfo">
            <h1 className="item-movies__title">{data.Title}</h1>
            <div className="item-movies__details">
            <p><span>Rated:</span> {data.Rated}</p>
            <p><span>Released: </span>{data.Released}</p>
            <p><span>Genre:</span> {data.Genre}</p>
            <p><span>Duration:</span> {data.Runtime}</p>
            <p><span>Writer:</span> {data.Writer}</p>
            <p><span>Actors:</span> {data.Actors}</p>
            <p><span>Plot:</span> {data.Plot}</p>
            <p><span>Country: </span>{data.Country}</p>
            <p><span>Awards:</span> {data.Awards}</p>
            <div className="item-movies__rate">
                <span>Ratings:</span> {data.Ratings.map(elem=> <p>{elem.Source}: {elem.Value}</p>)}
            </div>
            </div>
            <button className="book-item__add link">Add to favourites</button>
            <Link to={`/movies`} className="item-movies__more btn">Back</Link>
        </div>
        :<div className="item-movies__info">
            <h1 className="item-movies__title">{data.Title}</h1>
            <p className="item-movies__year">{data.Year}</p>
            {!featured && <Link to={`/movies/${data.imdbID}`}className="item-movies__more btn">More info</Link>}
            {featured ? <button className="book-item__add link" onClick={()=> dispatch(removeFromFavourites({data}))}>Remove from favourites</button>
            :<button className="book-item__add link" onClick={()=> dispatch(addToFavourites({data}))}>Add to favourites</button>
            }
        </div>}
        
    </div>
  )
}