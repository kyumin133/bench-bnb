import { fetchBenches } from "./bench_actions";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});


export function changeFilter(filters) {
  return (dispatch, getState) => {
    for (let i = 0; i < Object.keys(filters).length; i++) {
      let key = Object.keys(filters)[i]
      dispatch(updateFilter(key, filters[key]));
    }
    console.log(getState().filter);
    return fetchBenches(getState().filter)(dispatch);
  }
};
