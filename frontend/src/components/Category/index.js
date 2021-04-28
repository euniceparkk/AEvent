import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import CategoryEvents from '../CategoryEvents';
// import CategoryEvents from '../CategoryEvents';

import './Category.css'

function Category({ categoryName, categoryId }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(getCategoryIds());
  // }, [dispatch])

  // const [category, setCategory] = useState('');

  const handleClick = (e) => {
    const categoryId = e.target.attributes.value;
    console.log(categoryId);
    return (
      <Redirect to='/' />
    )
  };

  // console.log("category", category)

  return (
    // <div>
    //   <div>
    //     {categoryName}
    //   </div>
    // </div>
    <div>
      <div onClick={handleClick} className="category-bar__link" key={categoryId}>
        <h3 className='category' value={categoryId} >{categoryName}</h3>
        <h3>{categoryName}</h3>
        {/* <h3>{category}</h3> */}
        <CategoryEvents categoryId={categoryId} />
      </div>
    </div>
  );

}

// <NavLink className='allEvents-byCategory' to={`events/${category.id} `} >
//   { category}
// </NavLink >

export default Category;