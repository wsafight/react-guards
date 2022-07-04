import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactGuards, ReactGuardsProps, } from '../.';

const App = () => {
  return (
    <div>
      <ReactGuards target={() => Promise.resolve(false)} has='22,213'>
        213
        <div>324</div>
        <button onClick={() => alert(0)}>213213</button>
      </ReactGuards>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
