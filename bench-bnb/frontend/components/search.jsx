import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form'

function Search(props) {
  return  <div>
            <BenchMap benches={props.benches} changeFilter={props.changeFilter} fetchBenches={props.fetchBenches}/>
            <BenchIndex benches={props.benches} />
            <FilterForm changeFilter={props.changeFilter} minSeating={props.minSeating} maxSeating={props.maxSeating} />
          </div>;
}

export default Search;
