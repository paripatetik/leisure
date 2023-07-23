import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../features/books/booksSlice';

import booksBack from '../assests/booksback-min.jpg';

import BooksContainer from '../components/BooksContainer';
import Form from '../components/Form';
import Loading from '../components/Loading';

const apiKey = 'AIzaSyDXT-RB7evPHoONPnQSHxmXNiwG0oEHR1A';
const url = `https://www.googleapis.com/books/v1/volumes?&key=${apiKey}`;


export default function Books() {
const [search, setSearch] = useState('');
const [author, setAuthor] = useState('');
const [filter, setFilter] = useState('');
const [size, setSize] = useState(0);
const {isLoading, booksItems, error} = useSelector((state)=> state.books);
const dispatch = useDispatch();


const [currentPage, setCurrentPage] = useState(0);

function handleSubmit(e){
 e.preventDefault();
 if(!search && !author) return;
  let newUrl = `${url}&q=${author ? search+`+inauthor:${author}`: search}`;
  if (filter) newUrl = newUrl + "&filter="+ filter;
  if (size) {
    newUrl = newUrl + '&maxResults=' + size;
  }
  dispatch(getItems(newUrl));
  setFilter('');
  setSize('');
  setCurrentPage(0);
}
  
  return (
   <>
    <div className="books-body__container body-search">
      <img className='books__bcg' src={booksBack} alt="background"/>
      <Form search={search} setSearch={setSearch} setAuthor={setAuthor} type='books' handleSubmit={handleSubmit} setFilter={setFilter} setSize={setSize} />
    
    </div>
    {error ? <h2 className='title __container'>Nothing is found</h2> : isLoading?  <Loading/>: <BooksContainer search={search} author={author} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
  </>
  )
}