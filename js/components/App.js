import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>News list</h1>
        <ul>
          {this.props.newsFeed.articles.edges.map(edge =>
            <li key={edge.node.id}>
              <Link to={`/article/${edge.node.id}`}>
                {edge.node.title} (ID: {edge.node.id})
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    newsFeed: () => Relay.QL`
      fragment on NewsFeed {
        articles(first: 10) {
          edges {
            node {
              id,
              title,
              content,
              type
            }
          }
        }
      }
    `
  }
});
