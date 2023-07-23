import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BookItem from './BookItem';

const apiKey = 'AIzaSyDXT-RB7evPHoONPnQSHxmXNiwG0oEHR1A';
const url = `https://www.googleapis.com/books/v1/volumes?&key=${apiKey}`;

export default function SingleBook() {
  const {isLoading, booksItems, error} = useSelector((state)=> state.books);
  
  const { bookId } = useParams();
  let currentBook = booksItems.filter((elem) => elem.id === bookId)[0];


  if(!currentBook) return <h1>Error</h1>
  return (
    <>
      <BookItem data={currentBook} page={true}/>
    </>
  )
}