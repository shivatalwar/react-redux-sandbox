import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Discover from './components/Discover'
import Explore from './components/Explore'
import Portfolio from './components/Portfolio'

import reducer from './reducers'
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  injectTapEventPlugin()
) 

render(
  <Provider store={store}>
    <Router>
    <MuiThemeProvider>
    <div>
      <Header/>
       <Route exact path="/" component={Discover} />
       <Route path="/explore" component={Explore} />
       <Route path="/portfolio" component={Portfolio} />
    </div>
    </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
