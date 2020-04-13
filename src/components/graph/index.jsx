
import { Button } from 'reactstrap'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import React, { useState } from 'react'

const data1 = [
  {
    name: 'March',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'April',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'May',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'June',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'July',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'August',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'September',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const data2 = [
  {
    name: 'March',
    uv: 2000,
    pv: 1000,
    amt: 2400
  },
  {
    name: 'April',
    uv: 1000,
    pv: 1200,
    amt: 2210
  },
  {
    name: 'May',
    uv: 800,
    pv: 4000,
    amt: 2290
  },
  {
    name: 'June',
    uv: 5000,
    pv: 3000,
    amt: 2000
  },
  {
    name: 'July',
    uv: 4500,
    pv: 4500,
    amt: 2181
  },
  {
    name: 'August',
    uv: 500,
    pv: 900,
    amt: 2500
  },
  {
    name: 'September',
    uv: 3000,
    pv: 2000,
    amt: 2100
  }
]

const Graph = () => {
  const [data, useData] = useState(data1)

  const changeGraph = () => useData(data2)

  return (
    <div>
      <LineChart width={800} height={500} data={data}
        margin={{ top: 5, right: 5, left: 70, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      <Button onClick={changeGraph}>change</Button>
    </div>
  )
}

export default Graph
