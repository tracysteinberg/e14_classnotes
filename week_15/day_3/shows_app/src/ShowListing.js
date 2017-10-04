import React from 'react';
import Show from './Show';

const ShowListing = (props) => {

  const showNodes = props.shows.map( (show) => {
    return <Show show={show} key={show.title}/>
  })

  return (
     <ul> 
      { showNodes }  
     </ul>
  )

}

export default ShowListing;