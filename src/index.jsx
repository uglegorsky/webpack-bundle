import '@/styles/style.scss';
import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <>
    <h1>Webpack</h1>
      
    <hr />

    <div className="logo"></div>

    <pre></pre>
  </>
);

render(<App />, document.getElementById('app'));



