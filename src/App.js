import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import SharedFeatured from './components/SharedFeatured';
import FeaturedBooks from './pages/FeaturedBooks';
import FeaturedMovies from './pages/FeaturedMovies';

import Movies from './pages/Movies';
import SharedLayout from './components/SharedLayout';
import SharedBooksLayout from './components/SharedBooksLayout';
import SingleBook from './components/SingleBook';
import SharedMoviesLayout from './components/SharedMoviesLayout';
import SingleMovie from './components/SingleMovie';

import Error from './pages/Error';

import './scss/style.scss';

const apiKey = 'AIzaSyDXT-RB7evPHoONPnQSHxmXNiwG0oEHR1A';
const url = `https://www.googleapis.com/books/v1/volumes?q=''&key=${apiKey}`;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}> 
          <Route index element={<Home/>}/>
          <Route path='books' element={<SharedBooksLayout />}>
            <Route index element={<Books/>}/>
            <Route path=':bookId' element={<SingleBook />} />
          </Route>
        
          <Route path='movies' element={<SharedMoviesLayout />}>
            <Route index element={<Movies/>}/>
            <Route path=':movieId' element={<SingleMovie />} />
          
          </Route>
          <Route path='featured' element={<SharedFeatured/>}>
              <Route path='featured-books' element={<FeaturedBooks/>}/>
              <Route path='featured-movies' element={<FeaturedMovies />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}