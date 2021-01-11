
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
  export default Results;



