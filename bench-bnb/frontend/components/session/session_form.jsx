import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user, this.props.formType).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push("/")
  }

  handleChange(e) {
    let state = merge({}, this.state);
    state[e.target.id] = e.target.value;

    this.setState(state);
  }

  render() {
    let title = (this.props.formType === "signup") ? "Sign Up" : "Log In";
    let errors = "";
    if (this.props.errors.length > 0) {
      let errorArr = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
      errors = <ul>{errorArr}</ul>;
    }
    return  <div>
              <h2>{title}</h2>
              <div>{errors}</div>
              <form>
                <input type="text" id="username" placeholder="Username" onChange={this.handleChange}></input>
                <input type="password" id="password" placeholder="Password" onChange={this.handleChange}></input>
                <input type="submit" value={title} onClick={this.handleSubmit}></input>
              </form>
            </div>;
  }
}

export default SessionForm;
