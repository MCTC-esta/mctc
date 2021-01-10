import React from 'react';
import './Button';
import {Link} from 'react-router-dom';

//here i created 2 button classes 
const STYLES = ['btn--primary', 'btn--outline'];
//here i created 2 button classes 
const SIZES = ['btn--medium', 'btn--large'];
//i passed in some properties 
export const Button = ({children,
     type,
      onClick,
    buttonStyle,
    buttonSize 
}) => {
    //so this function will handle which style to give to the button it's either "btn--primary" or "btn--outline" as declared above and it's "btn--primary" by default .
    const chekckButtonStyle = STYLES.includes (buttonStyle) ? buttonStyle : STYLES[0] ;
    //this function does the exact same thing as the function above but it cheks the buttons size .
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] ;
//so the children is for rendering what ever you put inside of the button ==> it's making it dynamic.   
    return(
        <Link to='/Register' className='btn-mobile'>
            <button
            className={`btn ${chekckButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            
            
            >
            {children}
            </button>
        </Link>
    )
};