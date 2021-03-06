import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { getLocationSearch, setLocationSearch } from '../routing/location';
import NewsList from '../components/NewsList';
import CheckboxList from '../components/CheckboxList';

const possibleTypes = ['world', 'science', 'fiction', 'facts', 'lies'];

class News extends React.Component {
  static propTypes = {
    relay: PropTypes.shape({
      setVariables: PropTypes.func,
    }).isRequired,
    newsFeed: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      types: getLocationSearch().types || [],
    };
  }

  componentDidMount() {
    const { types } = getLocationSearch();
    this.updateQuery({ types });
  }

  updateQuery = (params) => {
    this.props.relay.setVariables(params);
  };

  updateTypes = (types) => {
    this.setState({ types });
    setLocationSearch({ types }, { replace: true });
    this.updateQuery({ types });
  };

  handleUpdateTypes = () => {
    this.updateTypes();
  };

  render() {
    return (
      <div className="container page">
        <h1 className="page-title">News list</h1>
        <CheckboxList
          possibleTypes={possibleTypes}
          types={this.state.types}
          onUpdate={this.updateTypes}
        />
        <NewsList newsFeed={this.props.newsFeed} />
      </div>
    );
  }
}

export default Relay.createContainer(News, {
  initialVariables: {
    types: getLocationSearch().types || [],
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
    `,
  },
});
