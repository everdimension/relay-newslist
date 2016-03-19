import React, { PropTypes } from 'react';
import './CheckboxList.scss';

class CheckboxList extends React.Component {
  static propTypes = {
    possibleTypes: PropTypes.array.isRequired,
    types: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
    ]).isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  toggleChecked = (type) => {
    let newTypes;
    const { types } = this.props;
    const typesArray = [].concat(types);
    if (typesArray.includes(type)) {
      newTypes = typesArray.filter(t => t !== type);
    } else {
      newTypes = [ ...typesArray, type ];
    }
    this.props.onUpdate(newTypes);
  };

  handleChange = (evt) => {
    this.toggleChecked(evt.target.value);
  };

  render() {
    const { possibleTypes, types } = this.props;
    return (
      <div className="Filters">
        {possibleTypes.map(type => (
          <div key={type} className="typeCheckbox">
            <input onChange={this.handleChange}
              type="checkbox"
              name={type}
              value={type}
              id={type}
              checked={types.includes(type)}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default CheckboxList;
