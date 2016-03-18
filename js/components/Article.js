import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class Article extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <h1>Article {article.title}</h1>
        <div>
          {article.id}
        </div>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(Article, {
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
