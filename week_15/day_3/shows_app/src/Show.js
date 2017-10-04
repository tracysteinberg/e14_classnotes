import React from 'react';

const Show = (props) => {
  return (
    <li>
      <a href={props.show.programmeID}>{props.show.title}</a>
      <p>
        {props.show.description}
      </p>
    </li>
  )
} 

export default Show;