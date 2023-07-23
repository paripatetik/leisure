import { Outlet } from 'react-router-dom';

export default function Movies() {
  return (
    <section className="movies">
         <h1 className="movies__title title">Movies</h1>
            <div className="movies__body">
           
              <Outlet />
            
            </div>
    </section>
  )
}