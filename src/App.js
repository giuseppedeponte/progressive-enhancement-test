import React, { useState } from 'react';

import List from './components/List'

import layouts from './layouts'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';

function App() {
  const [ className, setClassName ] = useState('');
  const handleChange = function (e) { setClassName(e.target.value); }

  return (
    <main id="product-list">
      <section>
        <List className={ className } />
      </section>
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
