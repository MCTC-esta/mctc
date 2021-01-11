
import React from "react";


const Results = (props) => (
    <div>
        <br/>
    <div> Page {props.current+1} </div>
          <div>
              <button onClick = {props.prev}>prev</button>
              <button onClick = {props.next}>next</button>
          </div>
       {props.tot === 0 ? <h3>no records found</h3> : <h3>{props.tot} records found</h3> }

const Results = (props) => {
    const total = props.tot
    return (
        <div style={{"textAlign": "center" }}>
          {total> 0 ? 
          <div >
        <fieldset style={{ "border":"2px solid green" }}>
        {props.tot === 1 ? <h3>1 potential host found</h3> :  <h3 style={{"color":"DarkGreen"  }}>{props.tot} potential hosts found</h3>}
        </fieldset>
        <br/> 
        <fieldset style={{ "border":"2px solid green" }}>
    <div style={{"marginTop": "5px","marginBottom": "5px" }}><span style={{"marginRight":"22px","fontSize": "15px"}} >Page {props.current+1}/{Math.ceil(props.tot / 5)}</span> 
          <br/>
          <input type="button" value="prev" onClick={props.prev} style={{"borderRadius": "5px","fontSize": "15px","margin": "8px" ,"padding": "5px 12px"}}/>
          <input type="button" value="next" onClick={props.next} style={{"borderRadius": "5px","fontSize": "15px","margin": "8px" ,"padding": "5px 12px" }}/>
          </div>
          </fieldset>
          <br/>

    <div>
    {
    props.matches.map((match,index) => {
        return (

            <div key={index}>
                <h2> Contact: </h2>
                <h4>name: {match.username}</h4>
                <h4>gender: {match.gender}</h4>
                <h4>age: {match.age}</h4>
                <h4>nationality: {match.nationality}</h4>
                <h4>space: {match.space}</h4>
                <h4>photo:</h4>
                <img src={match.profile} alt="BigCo Inc. logo"/>
                <h4>room photo:</h4>
                <img src={match.picture} alt="BigCo Inc. logo"/>
                <h4>contact: {match.contact}</h4>
                <h4>status: {match.status}</h4>
                <p>-------------------------------------------------------------</p>

            <div key={index} >
                <fieldset style={{ "border":"2px solid green" ,'marginBottom':'15px' }}>
                <h2 style={{"color":"DarkGreen"  }}> <u>Potential host information :</u> </h2>
                <div style={{ "display": "flex","flexDirection": "row", "alignItems": "center","justifyContent": "center"}}>
                <div style={{ "marginRight": "150px","borderStyle": "solid","borderWidth": "2px","borderColor":"green",'padding':'10px',"marginBottom": "10px"}}>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px","color":"darkRed" }}><u>Host photo:</u> </h4>
                <img src={match.profile} alt="BigCo Inc. logo" width="250" height="250"/>
                </div>

                <div style={{ "borderStyle": "solid","borderWidth": "2px","borderColor":"green",'padding':'10px'}}>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Name:</u> <span style={{"fontSize": "15px" ,"fontWeight": "500","color":"Navy"}}> {match.username}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Gender:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.gender}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Age:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.age}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Nationality:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.nationality}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Room space type:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.space}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Contact host on:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.contact}</span></h4>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Status:</u> <span style={{"fontSize": "15px","fontWeight": "500","color":"Navy"}}> {match.status}</span></h4>
                </div>
                
                <div style={{ "marginLeft": "150px","borderStyle": "solid","borderWidth": "2px","borderColor":"green",'padding':'10px',"marginBottom": "10px"}}>
                <h4 style={{"textAlign": "left","marginLeft": "10px","fontSize": "15px"}}><u style={{"color":"darkRed"}}>Room photo:</u></h4>
                <img src={match.picture} alt="BigCo Inc. logo" width="250" height="250" />
                </div>
                </div>
                </fieldset>

            </div>
        )
    })}
  </div>
  <br/>

    <div> Page {props.current+1} </div>
          <div>
              <button onClick = {props.prev}>prev</button>
              <button onClick = {props.next}>next</button>
          </div>
  </div>
  );

  <fieldset  style={{"marginBottom": "15px","border":"2px solid green"  }}>
  <div style={{"marginTop": "5px","marginBottom": "5px" }}><span style={{"marginRight":"22px","fontSize": "15px"}} >Page {props.current+1}/{Math.ceil(props.tot / 5)}</span> 
          <br/>
          <input type="button" value="prev" onClick={props.prev} style={{"borderRadius": "5px","fontSize": "15px","margin": "8px" ,"padding": "5px 12px"}}/>
          <input type="button" value="next" onClick={props.next} style={{"borderRadius": "5px","fontSize": "15px","margin": "8px" ,"padding": "5px 12px" }}/>
          </div>
          </fieldset>
  </div>  
          : <h3>no records found</h3>}
        </div>
      )  

}
  ;

  export default Results;



