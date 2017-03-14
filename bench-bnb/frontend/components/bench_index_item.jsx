import React from 'react';
class BenchIndexItem extends React.Component {
  render() {
    return <li key={this.props.bench.id}>{this.props.bench.description}</li>
  }
}

export default BenchIndexItem;
