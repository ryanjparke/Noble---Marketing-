import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './web.config';

import { Provider } from 'react-redux'; //becomes aware of state / store
// import store from './store';
import { unregister } from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Material = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
)

ReactDOM.render(
    <Provider  >
<Material />
</Provider>,
 document.getElementById('root'));
unregister();
