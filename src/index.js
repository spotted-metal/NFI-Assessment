/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ReactDOM from 'react-dom/client';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
