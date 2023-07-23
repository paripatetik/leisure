import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SharedFeatured() {
 
  return (
    <section className="featured">
      <div className="featured__container">
          <h1 className="featured__title title">Featured </h1>
          <div className="featured__content">
              <aside className="featured__nav">
                  <NavLink to='featured-books' className={({ isActive }) => (isActive ? 'featured__link active' : 'featured__link')}> Books </NavLink>
                  <NavLink to='featured-movies' className={({ isActive }) => (isActive ? 'featured__link active' : 'featured__link')}> Movies </NavLink>
              </aside>
              <Outlet/>
          </div>
      </div>
    </section>
  )
}