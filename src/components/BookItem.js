import bookImg from '../assests/book.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { addToFavourites, removeFromFavourites } from '../features/books/booksSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function BookItem({data, page, featured}) {
    const { featuredBooks} = useSelector((state)=> state.books);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const {id, link, accessInfo } = data;
    const {title, pageCount, subtitle, publishedDate, description: desc, printType, averageRating, authors, language, infoLink, publisher, categories} = data.volumeInfo;
    let text;
    if(data.searchInfo) text = data.searchInfo.textSnippet;
    if(text){
        text = text.replaceAll('&#39;', "'");
        text = text.replaceAll('&amp;', "&");
        text = text.replaceAll('&quot;', '"');
    }
    let img;
    if(data.volumeInfo.imageLinks) {
         img = data.volumeInfo.imageLinks.medium || data.volumeInfo.imageLinks.thumbnail;
    } else img = bookImg;
    
    let pdf;
    let epub;
    if(accessInfo.epub.isAvailable) epub=accessInfo.epub.acsTokenLink;
    if(accessInfo.pdf.isAvailable) pdf=accessInfo.pdf.acsTokenLink;
   
    function handleClick(){
         ref.current?.scrollIntoView({ behavior: 'smooth'});
    }
    
   
    return (
    <>
    <div ref={ref} className="book__item-top">
        {title && <h3 className="book-item__title">{title}</h3> }
        {subtitle ? <h3 className="book-item__subtitle">{subtitle}</h3>: ''}
        {authors ? <h4 className="book-item__authors">By {authors.join(', ')}</h4>: ''}
    </div>
    <div className={page ? "book-item __add" : "book-item"}>
        <div className="">
            <div className="book-item__img">
                <img src={img} alt={title}/>
                <div className="book-item__info">
                    <span>{publishedDate}</span>
                    <span>{language}</span>
                    <span>{printType}</span>
                    {publisher && <span>{publisher}</span>}
                    {categories ? <span>{categories.join(' ')}</span>: ''}
                </div>
            </div>
            {page && 
                <div className="book-item__addinfo">
                    <a className='book-item__link link' href={infoLink}>Page on Google Books</a>
                    {pdf && <a className='book-item__link link' href={pdf}>Dowload PDF</a>}
                    {epub && <a className='book-item__link link' href={epub}>Dowload EPUB</a>}
                </div>}
        </div>
        <div className="book-item__content">
            {text ? <p className="book-item__desc">{page ? desc : text}</p>: ''}
            
            {averageRating ? 
            <div className="book-item__rating">
               Rating: {averageRating}
            </div>: ''}
            {page && !featured && <p className='book-item__pages'>Pages: {pageCount}</p>}
            {featured ? <button className="book-item__add link" onClick={() => dispatch(removeFromFavourites({data}))}>Remove from favourites</button>
            :<button className="book-item__add link" onClick={() => dispatch(addToFavourites({data}))}>Add to favourites</button>}
          
            {featured ? "" : page ? <Link className='book-item__link link' to={`/books`}>Back</Link>:
            <Link className='book-item__link link' onClick={handleClick} to={`/books/${id}`}>more info</Link>} 
        </div>
    </div>
    </>
   
  )
}