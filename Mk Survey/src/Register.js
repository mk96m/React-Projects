import React from 'react';


function Register(props){
    return(
        <div className='main-register'>
        <form onSubmit={props.submit}>
            <h1>Registration Form</h1>
            <div>
                <label>Name:</label>
                <input type="text" required name="name" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" required name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" required name="password" />
            </div>
            <br />
            <button type='submit' className='btn' >Register</button>
        </form>      
      </div>
    );
}



export default Register;
