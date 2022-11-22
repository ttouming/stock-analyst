import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export const HistoryChart = (props) => {
  props = Object.values(props)[0];

  return (
    <div>
      <Line
        data={{
          labels: props.map((d) => d.date).reverse(),
          datasets: [
            {
              label: "Open",

              data: props.map((d) => d.open).reverse(),
              borderColor: "black",
            },
            {
              label: "High",

              data: props.map((d) => d.high).reverse(),
              borderColor: "red",
            },
            {
              label: "Low",

              data: props.map((d) => d.low).reverse(),
              borderColor: "blue",
            },
            {
              label: "Close",

              data: props.map((d) => d.close).reverse(),
              borderColor: "green",
            },
          ],
        }}
      />
    </div>
  );
};
