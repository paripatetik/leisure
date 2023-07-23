import Form from "../components/Form"
import imgBcg from '../assests/movie-bcg.jpg'; 
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from "../features/movies/moviesSlice";
import MoviesItem from "../components/MoviesItem";

import Loading from "../components/Loading";

const APIkey = '523c4dad';
const url = `https://www.omdbapi.com/?apikey=${APIkey}`;

export default function Movies() {
  const [search, setSearch] = useState();
  const [year, setYear] = useState();
  const dispatch = useDispatch();
  const {isLoading, moviesItems, error} = useSelector((state)=> state.movies);
  console.log(moviesItems);

  function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    let newUrl = url + `&s=${search}`;
    console.log(newUrl);
    dispatch(getItems(newUrl));
    setSearch('')
  }
  console.log(moviesItems);
  return (
    <section className="movies">
        <div className="movies__container">
          <div className="movies__body body-search">
            <img className="books__bcg" src={imgBcg} alt="movies"/>
            <Form type='movies' search={search} setSearch={setSearch} handleSubmit={handleSubmit} year={year} setYear={setYear}/>
          </div>
         
        </div>
        <div className="movies__content">
        {error ? <h2 className='title __container'>Nothing is found  </h2> : isLoading ?  <Loading/>:
         <div className="movies__content__container">{moviesItems.map(elem=> <MoviesItem page={false} featured={false} key={elem.imdbID} data={elem}/>)}</div>}
        </div>
    </section>
  )
}