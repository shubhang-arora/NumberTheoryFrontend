import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  RadialBar,
  RadialBarChart,
} from 'recharts';

const Graph = ({ data }) => {
  switch (data.information.type) {
    case 'area': {
      return (
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#64abde"
              fill="#64abde"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#367bad"
              fill="#367bad"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#165787"
              fill="#165787"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }
    case 'line': {
      return (
        <ResponsiveContainer width="99%" height={300}>
          <LineChart
            data={data.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#64abde"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#165787" />
          </LineChart>
        </ResponsiveContainer>
      );
    }
    case 'bar': {
      return (
        <ResponsiveContainer width="99%" height={300}>
          <BarChart
            fill="#70ad47"
            data={data.data}
            margin={{
              top: 20,
              right: 0,
              left: -15,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#64abde" />
            <Bar dataKey="amt" stackId="a" fill="#367bad" />
            <Bar dataKey="uv" fill="#165787" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
    case 'radar': {
      return (
        <ResponsiveContainer width="99%" height={300}>
          <RadarChart cx={170} cy={150} data={data.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#165787"
              fill="#64abde"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
    case 'radial': {
      return (
        <ResponsiveContainer width="99%" height={300}>
          <RadialBarChart
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data.data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      );
    }
    default:
      return <></>;
  }
};

export default Graph;
