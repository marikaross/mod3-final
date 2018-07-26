import React from 'react';

export const PokeDetails = (props) => {
  console.log(props)
  return (
    <div>
      <h4>Pokemon Name: {props.name}</h4>
      <h4> weight: {props.weight}</h4>
      <img src={props.sprites.front_default} />

    </div>
    )
}