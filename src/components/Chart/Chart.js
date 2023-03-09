import React from "react";
import "./chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.chartData.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  const monthExpenses = props.chartData.map((item) => (
    <ChartBar
      key={item.label}
      value={item.value}
      maxValue={totalMaximum}
      label={item.label}
    />
  ));

  return <div className="chart">{monthExpenses}</div>;
};

export default Chart;
