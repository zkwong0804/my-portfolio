import React from "react";

export const Title = (props) => {
  return (
    <h1
      className='text-danger mb-5'
      style={{fontWeight: 'bold' }}
      id={props.title}>
      &lt;<span style={{color: 'white'}}>{props.title}</span> /&gt;
    </h1>
  );
}