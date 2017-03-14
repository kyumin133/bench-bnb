import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from "./app";
import SessionFormContainer from "./session/session_form_container";
import SearchContainer from "./search_container";
import BenchFormContainer from "./bench_form/bench_form_container";
import BenchShowContainer from "./bench_show/bench_show_container";

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ SearchContainer } />
        <Route path="benches/new" component={ BenchFormContainer } onEnter={ _ensureLoggedIn } />
        <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="benches/:benchId" component={ BenchShowContainer } />
      </Route>
    </Router>
  </Provider>
);

const _redirectIfLoggedIn = (nextState, replace) => {
  if (window.currentUser) {
    replace({ nextPathName: nextState.location.pathname }, '/')
  }
}

const _ensureLoggedIn = (nextState, replace) => {
  if (!window.currentUser) {
    replace({ nextPathName: nextState.location.pathname }, '/login')
  }
}

export default Root;
