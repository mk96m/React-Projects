import React from 'react';

export default function Register(props) {
    const btnStyle = {
        backgroundColor: 'green',
        color: 'white',
    };
    let btnText, passBoxType;
    if (props.showPass === true) {
        btnStyle.backgroundColor = 'red';
        btnText = 'Hide Password';
        passBoxType = 'text';
    }
    else {
        btnText = 'Show Password';
        passBoxType = 'password';
    }

  return (
    <div className='container card p-3 mt-3 register-container'>
        <h1 className='text-center'>Regisrtation Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' required className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='text' name='email' required className='form-control' />
            </div>
            <div className='form-group'> 
                <label htmlFor='password'>Password:</label>
                <input type={passBoxType} name='password' required className='form-control' />
            </div>
            <br />
            <button type='submit' className='btn btn-primary m-1'>
                Register
            </button>
            <button type='button' className='btn' onClick={props.click} style={btnStyle}>
                {btnText}
            </button>
            <br />
            <button type='button' className='btn-1'>Login with Google</button>
            <button type='button' className='btn-2'>Login with Facebook</button>
        </form>
    </div>
  );
}
