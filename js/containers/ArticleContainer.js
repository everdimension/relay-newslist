import React from 'react';
import Relay from 'react-relay';
import Article from '../components/Article';

class ArticleContainer extends React.Component {
  render() {
    return (
      <div className="container page">
        <Article article={this.props.article} />
      </div>
    );
  }
}

export default Relay.createContainer(ArticleContainer, {
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        id,
        title,
        content,
        type
      }
    `
  }
});
