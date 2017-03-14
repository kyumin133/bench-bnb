import React from "react";
import merge from "lodash/merge"
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      description: "",
      seating: "",
      lat: this.props.lat,
      lng: this.props.lng
    }
  }

  handleChange(e) {
    let newState = merge({}, this.state);
    newState[e.currentTarget.id] = e.currentTarget.value;
    this.setState(newState);
    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state);
    this.props.router.push("/");
  }

  render() {
    return  <div>
              <form>
                <input type="text" id="description" onChange={this.handleChange} placeholder="Description"></input>
                <input type="number" id="seating" onChange={this.handleChange} placeholder="Number of seats"></input>
                <input type="number" id="lat" onChange={this.handleChange} placeholder="Latitude" step="0.00001" value={this.state.lat}></input>
                <input type="number" id="lng" onChange={this.handleChange} placeholder="Longitude" step="0.00001" value={this.state.lng}></input>
                <input type="submit" onClick={this.handleSubmit}></input>
              </form>
            </div>
  }
}

export default withRouter(BenchForm);
