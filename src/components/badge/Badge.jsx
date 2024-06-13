import './Badge.scss';
import React from 'react';

function Badge({ children }) {
  return (
    <>
      <div className='text-badge-container'>
        <p>{children}</p>
      </div>
    </>
  );
}

export default Badge;
