import React, { PropTypes } from 'react';
import './NewsListFilter.scss';

class NewsListFilter extends React.Component {

  state = {
    types: []
  }

  toggleChecked = (type) => {
    if (this.state.types.includes(type)) {
      this.setState({
        types: this.state.types.filter(t => t !== type)
      });
    } else {
      this.setState({
        types: [
          ...this.state.types,
          type
        ]
      });
    }
  };

  handleChange = (evt) => {
    this.toggleChecked(evt.target.value);
  };

  render() {
    return (
      <div className="Filters">
        <div className="typeCheckbox">
          <input onChange={this.handleChange}
            type="checkbox"
            name="newsType"
            value="worldNews"
            id="worldNews"
            checked={this.state.types.includes('worldNews')}
          />
        <label htmlFor="worldNews">
            type
          </label>
        </div>



      <div className="typeCheckbox">
        <input onChange={this.handleChange}
          type="checkbox"
          name="newsType"
          value="science"
          id="science"
          checked={this.state.types.includes('science')}
        />
      <label htmlFor="science">
          type
        </label>
      </div>



      <div className="typeCheckbox">
        <input onChange={this.handleChange}
          type="checkbox"
          name="newsType"
          value="fiction"
          id="fiction"
          checked={this.state.types.includes('fiction')}
        />
      <label htmlFor="fiction">
          type
        </label>
      </div>



      <div className="typeCheckbox">
        <input onChange={this.handleChange}
          type="checkbox"
          name="newsType"
          value="lies"
          id="lies"
          checked={this.state.types.includes('lies')}
        />
      <label htmlFor="lies">
          type
        </label>
      </div>



      </div>
    );
  }
}

export default NewsListFilter;
