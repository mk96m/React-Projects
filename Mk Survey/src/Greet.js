import React from 'react';


function Greet(props){
    return(
        <div className='main-greet'>
             <h3>{props.name}</h3>
             <h3>Thank You</h3>
             <h3>Details sent to {props.email}</h3>
      </div>
    );
}



export default Greet;
