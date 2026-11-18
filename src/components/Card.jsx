import React from 'react'
import {IndianRupee} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="top">
          <img src={props.img}></img>
        </div>
        <div className='content'>
          <div className='title'>
            <span>{props.title}</span>
            <span><IndianRupee size={17}/>{props.pay}</span>
          </div>
          <div className='description'>{props.desc}</div>
          <div className='button'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
  )
}

export default Card