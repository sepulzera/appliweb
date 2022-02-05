import { render } from 'react-dom';
import 'typeface-roboto';
import './index.css';
import './i18n';
import Root from './app/Root';
import * as serviceWorker from './serviceWorker';

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
