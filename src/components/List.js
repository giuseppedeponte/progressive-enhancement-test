import React from 'react'
import sections from '../sections'

import Card from './Card'

import './List.css';

const List = ({ className='' }) => {
  return (
    <ul className={ className }>
    {
      sections.map(section => (
        <li className="section" key={ section.title }>
          <h2>{ section.title }</h2>
          <ul>
          {
            section.items.map(item => (
              <li className="item" key={ item.title }>
                <Card { ...item } />
              </li>
            ))
          }
          </ul>
        </li>
      ))
    }
    </ul>
  )
}

export default React.memo(List)
