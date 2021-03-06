import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view.jsx';

// Import statement to indicate that you need to bundle './index.scss'
import './index.scss';

// Main component (will ecentually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView></MainView>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
