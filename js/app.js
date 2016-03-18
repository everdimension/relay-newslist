import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import { Route, browserHistory } from 'react-router';
import { RelayRouter } from 'react-router-relay';

import App from './components/App';
import Article from './components/Article';

// The root queries for the main site
const AppQueries = {
  newsFeed: (Component) => Relay.QL`
    query {
      newsFeed {
        ${Component.getFragment('newsFeed')}
      }
    }
  `
};

const ArticleQueries = {
  article: (Component) => Relay.QL`
    query {
      node(id: $id) {
        ${Component.getFragment('article')}
      }
    }
  `
};

ReactDOM.render(
  <RelayRouter
    history={browserHistory}
  >
    <Route
      path="/"
      component={App}
      queries={AppQueries} // and the query
    />
    <Route
      path="/article/:id"
      component={Article}
      queries={ArticleQueries}
    />
</RelayRouter>,
  document.getElementById('root')
);
