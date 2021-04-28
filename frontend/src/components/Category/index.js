import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import CategoryEvents from '../CategoryEvents';

import './Category.css'

function Category({ category, events }) {

  const [stateCat, setStateCat] = useState('');

  return (
    <div>
      <div className="category-bar__link" key={category} to={`category/${category.id}`}>
        <h3 className='category' onClick={(e) => setStateCat(e.target.value)}>{category}</h3>
        {/* <h3>{category}</h3> */}
      </div>
    </div>

  );

}

export default Category;