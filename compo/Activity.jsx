import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Activity.css";

const data = [
  { name: "5", uv: 4000 },
  { name: "9", uv: 3000 },
  { name: "11", uv: 2000 },
  { name: "13", uv: 2780 },
  { name: "15", uv: 1890 },
  { name: "17", uv: 2390 },
  { name: "19", uv: 3490 },
  { name: "21", uv: 5400 },
  { name: "23", uv: 3200 },
  { name: "25", uv: 2400 },
  { name: "27", uv: 3000 },
];

const Activity = () => {
  return (
    <div className="activity-chart">
      <div className="header">
        <h2>Activity</h2>
        <select className="dropdown" type="">
          <option value="weekly">Weekly</option> ▾
          <option value="weekly">Monthly</option> ▾
        </select>
      </div>
      <ResponsiveContainer width="100%" height={155}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884f8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
