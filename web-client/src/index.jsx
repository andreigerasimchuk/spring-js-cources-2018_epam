import React from 'react';
import ReactDOM from 'react-dom';
import { ListDataContainer } from './containers/list-data-container';
import './reset.scss';

const App = () => (<ListDataContainer />);

ReactDOM.render(<App />, document.getElementById('react-root'));
