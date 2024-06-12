import './Badge.scss';
import React from 'react';

function Badge({ children }) {
  return (
    <>
      <span className='text-badge-container'>
        <p>{children}</p>
      </span>
    </>
  );
}

export default Badge;
