import React from 'react'

import './Card.css'

const Card = ({ img, title, tag }) => {
  return (
    <figure className="card">
      <img src={ img } alt={ title } />
      <figcaption>
        { tag ? <strong>{ tag }</strong> : null }
        <p>{ title }</p>
        <button><i className="fa fa-plus" /></button>
      </figcaption>
    </figure>
  )
}

export default React.memo(Card)
