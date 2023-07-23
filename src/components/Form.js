
import BooksSelect from '../components/BooksSelect';

export default function Form({search, setSearch, author, setAuthor, handleSubmit, setFilter, setSize, type, year, setYear}) {
 

  return (
    <form onSubmit={handleSubmit} className="books__form">
        <input placeholder={type==='books' ? 'Search for books': 'Search for movies'} className={type==="books" ? "books__search __search": 'movies__search __search'} type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <input className={type=='books' ? 'search__btn books btn': 'search__btn movies btn'} type="submit" value='Search'/>
        {type ==='books' ? 
        <input placeholder='Author' className='books__search __search -author' type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
        : ''
   
        }
        <BooksSelect type={type} setFilter={setFilter} setSize={setSize}/>
    </form>
  )
}