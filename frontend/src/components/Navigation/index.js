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
      <>
        <div className='nav-fav__container'>
          <img className='fav-img' alt='favorite icon' src='https://aevent-project.s3.amazonaws.com/00-heart-regular.svg'></img>
          <NavLink className='link-favorite' to='/profile/favorites'>Likes</NavLink>
        </div>
        <div className='nav-tic__container'>
          <img className='tic-img' alt='ticket icon' src='https://aevent-project.s3.amazonaws.com/00-ticket-alt-solid.svg'></img>
          <NavLink className='link-ticket' to='/profile/tickets'>Tickets</NavLink>
        </div>
        <div className='nav-prof__container'>
          <ProfileButton user={sessionUser} />
        </div>
      </>
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
          <img alt='logo' className='home-logo__image' src={'https://aevent-project.s3.amazonaws.com/00-fixed-logo.png'} />
        </NavLink>
      </div>

      <div className="nav-bar__search-icon">
        <i className="fas fa-search"></i>
      </div>

      <div className='nav-bar__search-container'>
        <form>
          <input
            className='search-bar'
            type='text'
            placeholder='Search events'
          >
          </input>
        </form>
      </div>

      {/* 
      <div className='nav-bar__icons'>
        <div className="icon-heart">
          <i className="far fa-heart"></i>
        </div>
        <div className="icon-ticket">
          <i className="fas fa-ticket-alt"></i>
        </div>
      </div> */}

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