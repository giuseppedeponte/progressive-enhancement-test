import React, { useState } from 'react';

import sections from './sections'
import layouts from './layouts'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import './layout.css';

function App() {
  const [ className, setClassName ] = useState('');
  const handleChange = function (e) { setClassName(e.target.value); }

  return (
    <main id="product-list">
      <ul className={ className }>
      {
        sections.map(section => (
          <li className="section" key={ section.title }>
            <h2>{ section.title }</h2>
            <ul>
            {
              section.items.map(item => (
                <li className="item" key={ item.title }>
                  <figure className="card">
                    <img src={ item.img } alt={ item.title } />
                    <figcaption>
                      { item.title }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
            </ul>
          </li>
        ))
      }
      </ul>
      <footer>
        {
          layouts.map(layout => (
            <label key={ layout.className } htmlFor="className" title={ layout.label } data-layout={ layout.className }>
              <input checked={ className === layout.className } onChange={ handleChange } type="radio" defaultValue={ layout.className } name="className" />
              &nbsp;
              { layout.icon ? <i className={ layout.icon } /> : null }
              &nbsp;
              <span>{ layout.label }</span>
              { layout.href ? <a className="fa fa-info-circle" rel="noopener noreferrer" target="_blank" href={ layout.href }><span>{ layout.label }</span></a> : null }
            </label>
          ))
        }
      </footer>
    </main>
  );
}

export default App;
