import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/italy.jpg'
              text='The surface of Venice is constantly metamorphosing [and] painting Venice is almost like being a restorer, peeling off the layers to find the picture after picture underneath.'
              label='+2500 hosts'
              path='/hosts'
            />
            <CardItem
              src='images/canada.jpg'
              text='Canada is the essence of not being. Not English, not American, it is the mathematics of not being. -Mike Myer'
              label='+1000 hosts'
              path='/hosts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/swiss.jpg'
              text='Switzerland is a country where very few things begin, but many things end.'
              label='+6800'
              path='/hosts'
            />
            <CardItem
              src='images/california.jpg'
              text='You could travel the world, but nothing comes close to the golden coast.'
              label='+500 hosts'
              path='/hosts'
            />
            <CardItem
              src='images/brazil.jpg'
              text='Brazil was, is, and will be in fashion.
              – Gilberto Gil'
              label='+7000 hosts'
              path='/hosts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
