import { useDispatch, useSelector } from "react-redux";
import { clearFavourites } from "../features/books/booksSlice";
import BookItem from "../components/BookItem";

export default function FeaturedBooks() {
  const dispatch = useDispatch();
  const {featuredBooks} = useSelector((state)=> state.books);
  return (
    <section className="featured__body f-books">
        <h2 className="featured__subtitle">Books</h2>
        <button className="featured__clear" onClick={() => dispatch(clearFavourites())}>
        Clear favourite books
        </button>
        <div className="featured__items">
            {featuredBooks.map(elem=> <BookItem data={elem} page={false} featured={true}/>)}
        </div>
    </section>
  )
}