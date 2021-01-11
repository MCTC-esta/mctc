import React, { Component }  from 'react';
import axios from 'axios';
import '../auth/Edit.css';
import $ from "jquery"



class Edit extends Component {
    constructor(props) {
      super(props);
        //console.log(props)
      this.state = {
        space: '',
        contact: '',
        status: '',
      };
    }
  
    // const [items , setItems] = useState([])
    // useEffect(() => {
    //     setItems([
    //         {text : "age" , id:0},
    //         {text : "gender" , id:1},
    //         {text : "status" , id:2},
    //     ])
    // })
    handleInputChange(property) {
        return e => {
          this.setState({
            [property]: e.target.value
          });
        };
      }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { space, contact, status } = this.state;
    
        const user = {
          space,
          contact,
          status,
        };
    
        // await axios
        //   .post('http://localhost:4000/users/editprofile', user)
        //   .then(() => console.log('edited'))
        //   .catch(err => {
        //     console.error("this from the front",err);
        //   });
        // console.log(user);

        $.post("http://localhost:4000/users/editprofile",
      user,
     (res) => {
             console.log('server response: ',res.message)
             }
     )

      };

    onSpaceChange(event) {
        this.setState({space: event.target.value})
    }
    onContactChange(event) {
        this.setState({contact: event.target.value})
    }
    onStatusChange(event) {
        this.setState({status: event.target.value})
    }

      render (){

        return (
        
         <div className="HeroSection">
            <div className="HeroWrapper">               
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>contact</p>
                        <input name="contact" 
                        value={this.state.contact} 
                        onChange={this.onContactChange.bind(this)} 
                        type="text"/>
                    </div>
                    <div>
                        <p>space</p>
                        {/* <input name="space" 
                        value={this.state.space} 
                        onChange={this.onSpaceChange.bind(this)} 
                        type="text"/> */}
                        <select onChange={this.onSpaceChange.bind(this)}>
                        <option value=""></option>  
                        <option value="Shared">Shared</option>
                        <option value="Private">Private</option>
                        </select>
                    </div>
                    <div>
                        <p>status</p>
                        {/* {
                        <input 
                        name="status" 
                        value={this.state.status} 
                        onChange={this.onStatusChange.bind(this)} 
                        type="text"/>} */}
                        <select onChange={this.onStatusChange.bind(this)}>
                        <option value=""></option>
                        <option value="Host">Host</option>
                        <option value="Guest">Guest</option>
                        </select>
                    </div>
                    <button id="button" type="submit">edit</button>
                </form>   
            </div>
        </div>     
    )
}
}

export default Edit;