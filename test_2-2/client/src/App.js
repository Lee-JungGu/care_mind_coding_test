import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-google-charts";

function App() {
  const [chartData, setChartData] = useState([]);

  const getChartData = () => {
    axios.get("/api/chart").then((reponse) => setChartData(reponse.data));
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Chart
      width={"800px"}
      height={"500px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: "My Daily Activities",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default App;
