import { useSelector } from "react-redux";
import Loading from "./Loading";
import BookItem from "./BookItem";
import { useState, useRef } from "react";
import Btns from "./Btns";


export default function BooksContainer({search, author, currentPage, setCurrentPage}) {
  const {isLoading, booksItems} = useSelector((state)=> state.books);
 
  const ref = useRef(null);

  const amount = 4
  const length = booksItems.length;
  const pages = Math.ceil(length / amount);
  
  const start = currentPage * amount;
  const end = start + amount;
  const currentItems = booksItems.slice(start, end);
 
  function handleClick(e, i){
    setCurrentPage(i);
    ref.current?.scrollIntoView({ behavior: 'smooth'});
    let div = e.target.closest('.books__pages.pagination'); 
    div.querySelectorAll('button').forEach(elem=>elem.classList.remove('active'));
    e.target.classList.add('active');
   }
  
  if(isLoading) return  <Loading/> 
  return (
      <div ref={ref} className={isLoading ? 'books__content': "books__content active"}>
          <div className="books-content__container">
          {booksItems.length ===0 ? '':<h2 className="books__content-title">Results for "{search}" by <i>{author}</i></h2>}
               {currentItems.map(elem=><BookItem page={false} key={elem.id} data={elem}/>)}
               <Btns pages={pages} onClick={handleClick}/>
          </div>
      </div>
  )
}