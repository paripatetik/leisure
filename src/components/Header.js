import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.svg';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeMenu, setMenu] = useState(false);

  useEffect(() => {
    activeMenu ? document.body.classList.add('lock') : document.body.classList.remove('lock') ;
  }, [activeMenu]);
  
  return (
    <header className='header'>
          <div className="header__container">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
              <div className={activeMenu ? "header__navbar active": "header__navbar"}>
                  <NavLink onClick={()=>{setMenu(false)}} to='/' className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}> Home </NavLink>
                  <NavLink onClick={()=>{setMenu(false)}} to='books' className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}> Books </NavLink>
                  <NavLink onClick={()=>{setMenu(false)}} to='movies' className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}> Movies </NavLink>
                  <NavLink onClick={()=>{setMenu(false)}} to='featured' className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}> Featured </NavLink>
              </div>
              <button onClick={() => setMenu(!activeMenu)} className={activeMenu ? "header__burger active": "header__burger"}>
                 <span>
                 </span>
              </button>
          </div>
    </header>
  )
}