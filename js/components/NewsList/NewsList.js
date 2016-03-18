import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './NewsList.scss';

class NewsList extends React.Component {
  static propTypes = {
    newsFeed: PropTypes.shape({
      articles: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            preview: PropTypes.string
          }).isRequired
        })).isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    return (
      <ul className="NewsList">
        {this.props.newsFeed.articles.edges.map(edge =>
          <li key={edge.node.id} className="NewsList__item">
            <Link to={`/article/${edge.node.id}`} className="block-link">
              <div className="media">
                <div className="media-left">
                  <img
                    src="http://placehold.it/50x50"
                    className="NewsList__preview-image media-object"
                    alt="article image"
                  />
                </div>
                <div className="media-body media-middle">
                  <h3 className="NewsList__article-title">
                    {edge.node.title}
                  </h3>
                  <div>{edge.node.preview}</div>
                </div>
              </div>

            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default NewsList;
