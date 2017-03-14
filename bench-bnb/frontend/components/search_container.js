import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions"
import { changeFilter } from "../actions/filter_actions"
import Search from './search.jsx'

const mapStateToProps = (state) => {
  return {
    benches: state.benches,
    minSeating: state.filter.minSeating,
    maxSeating: state.filter.maxSeating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: () => {
      return dispatch(fetchBenches());
    },

    changeFilter: (filter) => {
      return dispatch(changeFilter(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
