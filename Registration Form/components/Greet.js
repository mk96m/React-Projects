import React from 'react';

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-3 greet-container text-center'>
       <h3>{props.name},</h3>
       <h3>Thank You for joining us.</h3>
       <h3>Verification sent to {props.email}</h3>
    </div>
  );
}
