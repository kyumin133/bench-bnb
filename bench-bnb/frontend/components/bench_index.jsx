import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchBenches();
  }

  render() {
    let benchesArr = this.props.benches.map((bench, i) => {
      return <BenchIndexItem key={i} bench={bench} />;
    });
    return <ul>{benchesArr}</ul>;
  }
};

export default BenchIndex;
