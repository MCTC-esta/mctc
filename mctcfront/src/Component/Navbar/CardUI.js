import React from 'react';

import'./card-style.css' 

const CardUI = props => { 
return (
    <div className='up'>
<div className='card text-center'>
<div className='overflow'>
<img src={props.imgsrc} alt='Image 1' className='card-img-top' />
</div>
<div calssName='card-body text-dark'>
    <h4 className='card-title'>{props.title}</h4>
    <p cassName='card-text text-secondary'>{props.paragraph}
    </p>
    <a href='#' className='btn btn-outline-success'>Home</a>
</div>
</div>
</div>
);

}

export default CardUI