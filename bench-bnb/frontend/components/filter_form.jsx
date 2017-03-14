import React from 'react';
import merge from 'lodash/merge'

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minSeating: 1,
      maxSeating: 10
    }
    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(e) {
    e.preventDefault();

    let filters = merge({}, this.state);
    filters[e.currentTarget.id] = parseInt(e.currentTarget.value);

    this.props.changeFilter(filters);

    this.setState(filters);
  }

  render() {
    return  <div>
              <input type="number" id="minSeating" value={this.state.minSeating} onChange={this.updateFilters} placeholder="Minimum seating"></input>
              <input type="number" id="maxSeating" value={this.state.maxSeating} onChange={this.updateFilters} placeholder="Maximum seating"></input>
            </div>
  }
}

export default FilterForm;
