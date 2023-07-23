import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../features/movies/moviesSlice';
import MoviesItem from './MoviesItem';
import { useEffect } from 'react';
import Loading from './Loading';

const APIkey = '523c4dad';
const url = `https://www.omdbapi.com/?apikey=${APIkey}`;

export default function SingleBook() {
  const {isLoading, moviesItems, error, currentMovie} = useSelector((state)=> state.movies);
  const { movieId } = useParams();
  const dispatch = useDispatch();


  useEffect(()=>{
    let newUrl = url + `&i=${movieId}`;
    dispatch(getItems(newUrl))
  },[])

  if(!currentMovie) return <h1>Error</h1>
  if(isLoading) return <Loading/>
  return (
    <div className='movie__container'>
      <MoviesItem data={currentMovie} page={true}/>
    </div>
  )
}