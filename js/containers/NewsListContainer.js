import React from 'react';
import Relay from 'react-relay';
import { getLocationSearch, setLocationSearch } from '../routing/location';
import NewsList from '../components/NewsList';
import CheckboxList from '../components/CheckboxList';

const possibleTypes = ['world', 'science', 'fiction', 'facts', 'lies'];

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: getLocationSearch().types || [],
    };
  }

  updateTypes = (types) => {
    this.setState({ types });
    setLocationSearch({ types }, { replace: true });
    this.props.relay.setVariables({ types });
  };

  handleUpdateTypes = (evt) => {
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
    `
  }
});
