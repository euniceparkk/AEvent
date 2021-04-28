import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import EntryModal from '../EntryModal';
// import SearchBar from '../SearchBar';

import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <EntryModal />
        {/* <SignupFormModal /> */}
      </>
    );
  }

  return (
    <div className='nav-bar__container'>
      <div className='nav-bar__logo-link'>
        <NavLink exact to="/">
          <img alt='logo' className='home-logo__image' src={'/images/logo/main-logo-trans.png'} />
        </NavLink>
      </div>

      <form className='nav-bar__search'>
        <input
          className='search-bar'
          type='text'
          placeholder='Search events'
        >
        </input>
        <div className="nav-bar__search-icon">
          <i className="fas fa-search"></i>
        </div>
      </form>

      <div className='nav-bar__icons'>
        <div className="icon-heart">
          <i className="far fa-heart"></i>
        </div>
        <div className="icon-ticket">
          <i className="fas fa-ticket-alt"></i>
        </div>
      </div>

      <div className='session-links'>
        {isLoaded && sessionLinks}
      </div>

    </div>
  );
}

{/* <a href='/' className='home-logo'> */ }
{/* </a> */ }

// function NavigationItems(props) {
//   return (
//     <ul>
//       <li>
//         <NavLink exact to='/'>
//           {props.navIcon}
//         </NavLink>
//       </li>
//     </ul>
//   )
// }

export default Navigation;