import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface chartEntry {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationData: chartEntry[];
}

function PopulationChart({ populationData }: PopulationChartProps) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={populationData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PopulationChart;
