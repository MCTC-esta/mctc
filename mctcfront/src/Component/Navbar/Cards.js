

import React, {Component} from 'react'
import Card from './CardUI'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.png'

class Cards extends Component {
    
    render() { 
    return (
        
    <div className="container-fluid d-flex justify-content-center" > 
    <div className="row">
    <div className = 'col-md-4'>
        <Card imgsrc={img1} title="Respect Personal Space" paragraph = "Here are some basic rules Never touch anyone you don t know. Don t reach for anyone else s children, regardless of your intentions. Stand at least 4 feet away from a person unless you know him or her well. When someone leans away from you, you are probably in that person s space that makes him or her uncomfortable"/>
        </div>
    <div className = 'col-md-4'>
        <Card imgsrc = {img2} title="Respects for other's Belongings" paragraph ="Respect for other people's things implies to know and to feel that we should not
use what is not ours, and if in a specific moment we need what does not belong
to us, we cannot take it if we do not count on the approval of its owner.
But it is also something else. It is to know how to appreciate, to recognize and
to take care of the work of others, for example not to destroy the material goods
that other people make and that we use ourselves , There are many ways to be careful of other people’s property, Be carful .
"/>
    </div>
    <div className = 'col-md-4'>
        <Card imgsrc = {img3} title="Disadvantages of theft" paragraph="When a person takes something that belongs to somebody else without permission, that is stealing. The stolen object can be as small as a piece of candy or as big as a car.
      A person commits “theft from the person” if they steal property while the property is being held or carried by the victim.This includes snatch thefts(where some degree of force is directed to the property but not to the victim)and stealth thefts (where the victim is unaware of the offence being committed,
      Theft carries legal penalties take to jail "/>
    </div>
    </div>
    </div>
    
    )
    }
}


export default Cards


