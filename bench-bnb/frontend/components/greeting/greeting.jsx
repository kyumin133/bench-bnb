import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }

  logged_in() {
    return this.props.currentUser !== null;
    // this.forceUpdate();
  }

  logout() {
    this.props.logout();
  }

  render() {
    if (this.logged_in()) {
      return  <div>
                <h2>Welcome, {this.props.currentUser.username}!</h2>
                <button type="button" onClick={this.logout}>Logout</button>
              </div>
    } else {
      return  <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
              </div>
    }
  }
}

export default Greeting;
