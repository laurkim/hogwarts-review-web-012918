import React from 'react';

const HogDetails = props => {
  return (
    <div>
      <p> {props.specialty} </p>
      <p> {props.greased? 'Greased up boi' : 'Dry AF'} </p>
      <p> {props.weight} </p>
      <p> {props.medal} </p>
    </div>
  )
}

export default HogDetails;
