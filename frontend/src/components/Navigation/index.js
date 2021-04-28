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
    <div className='nav-bar'>
      <div className='nav-bar__main'>
        <NavLink className='home-btn' exact to="/">
          <a href='/' className='home-logo'>
            <img alt='logo' className='home-logo' src={'/images/logo/main-logo-trans.png'} />
          </a>
        </NavLink>
        <button className="nav-bar__icon">
          {<i class="fas fa-plus"></i>}
        </button>
        <button className="nav-bar__icon">
          <i className="far fa-heart"></i>
        </button>
        <button className="nav-bar__icon">
          <i className="fas fa-ticket-alt"></i>
        </button>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

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