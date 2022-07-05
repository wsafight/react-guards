import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ReactGuards,
  ReactGuardsProps,
  setGlobalCurrent as setGlobalCurrentForReactGuard
} from '../.';

const waitThenError = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(false)
    }, 2000);
  })
}

const Load = () => <div>加载中</div>

const Error = () => <div>出错了</div>

const App = () => {
  return (
    <div>
      <ReactGuards target={waitThenError} errComponent={Error} loadingComponent={Load}>
        213
        <div>324</div>
        <button onClick={() => alert(0)}>213213</button>
      </ReactGuards>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
