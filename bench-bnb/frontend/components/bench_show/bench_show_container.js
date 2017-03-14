import { connect } from "react-redux";
import BenchShow from './bench_show';

const mapStateToProps = (state) => {
  return { benches: state.benches };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
