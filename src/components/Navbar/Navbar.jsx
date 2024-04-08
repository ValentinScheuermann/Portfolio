import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logomio from '../../assets/logomio.png';
import logomio2 from '../../assets/logomio2.png';

const Navbar = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Si se hace clic fuera del dropdown, se cierra
        dropdownRef.current.removeAttribute('open');
      }
    };

    // Agregar el event listener cuando el componente se monta
    document.addEventListener('mousedown', handleClickOutside);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/ContactMe">Contacto</Link></li> 
            <li>
              <details ref={dropdownRef}>
                <summary>Curriculum</summary>
                <ul className="CV">
                  <li><Link to="https://drive.google.com/file/d/1UFq1pxw-UV1GD1TDF9kpJowyyF6nLjvl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">En - Resume</Link></li>
                  <li><Link to="https://drive.google.com/file/d/1xUjAmZF9wfM7uK0ViYicHjbxXuFgHwXC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Es - Curriculum</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a href='/'>
          <img className='logodev' src={logomio} alt="Logo" />
        </a>
        <a href='/' className="portfolio">Portfolio</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-0">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/ContactMe">Contacto</Link></li> 
          <li>
            <details ref={dropdownRef}>
              <summary>Curriculum - Resume</summary>
              <ul className="CV">
                <li><Link to="https://drive.google.com/file/d/1DPvvjx1sG0j18Q4oERovnmcrvsPo-aG5/view?usp=sharing" target="_blank" rel="noopener noreferrer">En - Resume</Link></li>
                <li><Link to="https://drive.google.com/file/d/1NTbY_1BLLZz8GAv7jiNs3qo1VqXawtd2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Es - Curriculum</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
