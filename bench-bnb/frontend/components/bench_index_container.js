import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions"
import BenchIndex from './bench_index'

const mapStateToProps = (state) => {
  return { benches: state.benches };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: (filters) => {
      return dispatch(fetchBenches(filters));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
