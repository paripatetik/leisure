import { Outlet } from 'react-router-dom';

export default function Books() {
  return (
    <section className="books">
            <div className="books__body">
            <h1 className="books__title title">Books</h1>
              <Outlet />
            
            </div>
    </section>
  )
}