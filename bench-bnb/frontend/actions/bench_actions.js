import BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const fetchBenches = (filters) => (dispatch) => {
  return BenchAPIUtil.fetchBenches(filters).then(response => {
    return dispatch(receiveBenches(response));
  });
};

export const createBench = (bench) => (dispatch) => {
  return BenchAPIUtil.createBench(bench).then(response => {
    return dispatch(receiveBench(response));
  });
}

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
})
