import React, { useState } from 'react';

function Button({ text }) {
  return (
    <button className='button'>
      {text}
    </button>
  )
}

export default Button;