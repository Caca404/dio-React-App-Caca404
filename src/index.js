import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';

// import './index.css';

const App = () => {
  return <h1>Hello World from React</h1>
}

// const rootElement = React.createElement('h1', null, 'Hello World');
ReactDOM.render(<App />, document.getElementById('root'));

