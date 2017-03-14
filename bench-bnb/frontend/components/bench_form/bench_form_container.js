import { connect } from "react-redux";
import { createBench } from '../../actions/bench_actions';
import BenchForm from './bench_form';

const mapStateToProps = (state, ownProps) => {
  return {
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBench: (bench) => {
      dispatch(createBench(bench));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchForm);
