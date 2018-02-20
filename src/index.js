import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; //becomes aware of state / store
// import store from './store';
import { unregister } from './registerServiceWorker';


ReactDOM.render(
    <Provider  >
<App />
</Provider>,
 document.getElementById('root'));
unregister();
