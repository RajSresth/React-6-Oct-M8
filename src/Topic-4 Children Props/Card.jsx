import React from 'react'

const Card = (props) => {
     props.fullname="MS Dhoni";   // props are immutable
  return (
    <div className='card-div'>
       <h3>Fullname: {props.fullname}</h3>
     
    </div>
  )
}

export default Card



