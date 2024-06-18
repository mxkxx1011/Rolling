import CardList from 'components/card/CardList';
import { useState, useEffect } from 'react';
import 'Carousel.scss';

function Carousel(recipient) {
  return (
    <div className='carousel'>
      <div className='carousel-box'>
        <CardList key={recipient.id} recipient={recipient} />
      </div>
    </div>
  );
}

export default Carousel;
