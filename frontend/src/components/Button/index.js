import React, { useState } from 'react';

function Button({ text }) {
  return (
    <button className='button'>
      {text}
      <a href="#"/>
    </button>
  )
}

export default Button;