import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import App from './App';
import * as sw from './sw';
import 'dayjs/locale/pt-br';

import './assets/styles.scss';

dayjs.locale('pt-br');
window.day = dayjs;

ReactDOM.render(<App />, document.getElementById('root'));

sw.unregister();
