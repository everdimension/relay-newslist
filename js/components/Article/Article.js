import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './Article.scss';

class Article extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { article } = this.props;
    return (
      <div>
        <h1 className="page-title">{article.title}</h1>
        <div className="Article">
          <p className="Article__paragraph">{article.content}</p>
          <div>
            <Link to="/">Back to news list</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
