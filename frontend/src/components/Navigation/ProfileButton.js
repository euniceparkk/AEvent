import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className='user-email'>
        <p className='email-text'>{user.email}</p>
      </div>
      <div className='profile-btn__container'>
        <button onClick={openMenu} className='profile-btn'>
          <i className="fas fa-user-circle" />
        </button>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li>{user.email}</li> */}
          <NavLink className='dropdown-favorite' to='/profile/favorites'>
            <li className='drop-item'>Your Favorites</li>
          </NavLink>
          <NavLink className='dropdown-ticket' to='/profile/tickets'>
            <li className='drop-item'>Your Tickets</li>
          </NavLink>
          <li className='drop-item'>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;