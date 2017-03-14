import React from "react";
import { withRouter } from "react-router"
import BenchMap from "../bench_map";

class BenchShow extends React.Component {
  constructor(props) {
    super(props);


    for (let i = 0; i < this.props.benches.length; i++) {
      let bench = this.props.benches[i];
      if (bench.id === parseInt(this.props.params.benchId)) {
        this.bench = bench;
        break;
      }
    }

  }
  componentWillMount() {
    if (this.bench === undefined) {
      this.props.router.push("/");
    }
  }

  render() {
    if (this.bench === undefined) {
      return <div></div>;
    }
    return  <div>
              <h1>
                {this.bench.description}
              </h1>
              <span>Number of seats: {this.bench.seating}</span>
              <BenchMap fixed={true} benches={[this.bench]} changeFilter={() => {}} fetchBenches={() => {}}/>
            </div>;
  }
}

export default withRouter(BenchShow);
