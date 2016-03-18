import React from 'react';
import Relay from 'react-relay';
import NewsList from '../components/NewsList';

class News extends React.Component {
  render() {
    return (
      <div className="container page">
        <h1>News list</h1>
        <NewsList newsFeed={this.props.newsFeed} />
      </div>
    );
  }
}

export default Relay.createContainer(News, {
  fragments: {
    newsFeed: () => Relay.QL`
      fragment on NewsFeed {
        articles(first: 10) {
          edges {
            node {
              id,
              title,
              preview,
              type
            }
          }
        }
      }
    `
  }
});
