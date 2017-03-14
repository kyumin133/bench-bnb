const BenchAPIUtil = {
  fetchBenches: (filters) => {
    return $.ajax({
      method: "GET" ,
      url: "/api/benches",
      data: filters,
      error: (err) => console.log(err)
    })
  },

  createBench: (bench) => {
    console.log(bench);
    return $.ajax({
      method: "POST",
      url: "/api/benches",
      data: { bench: bench },
      error: (err) => console.log(err)
    });
  }
};
export default BenchAPIUtil;
