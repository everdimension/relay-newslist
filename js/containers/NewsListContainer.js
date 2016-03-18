import React from 'react';
import Relay from 'react-relay';
import NewsList from '../components/NewsList';
// import NewsListFilter from '../components/NewsListFilter';

class News extends React.Component {
  render() {
    return (
      <div className="container page">
        <h1 className="page-title">News list</h1>
        {/*<NewsListFilter />*/}
        <NewsList newsFeed={this.props.newsFeed} />
      </div>
    );
  }
}

export default Relay.createContainer(News, {
  initialVariables: {
    types: []
  },
  fragments: {
    newsFeed: () => Relay.QL`
      fragment on NewsFeed {
        articles(first: 10, types: $types) {
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
