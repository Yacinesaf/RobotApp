import React from 'react';
// import image from './img.jpg'
import './Card.css'


const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-red dib  br3 pa3 ma2 grow bw1 shadow-5'>
      <img src={`https://robohash.org/${id}`} alt='' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
