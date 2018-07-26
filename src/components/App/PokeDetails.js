import React from 'react';

export const PokeDetails = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.weight}</h2>
      <img src={props.sprites.front_default} />

    </div>
    )
}