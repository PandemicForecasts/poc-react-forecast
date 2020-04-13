import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import PropTypes from 'prop-types'
import React from 'react'

const animationDuration = 450

const Graph = ({ data }) => (
  <ResponsiveContainer width="80%">
    <LineChart
      data={data}
      margin={{ top: 5, right: 40, left: 70, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"/>
      <YAxis domain={[0, 10000]}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        animationDuration={animationDuration}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        animationDuration={animationDuration}
      />
    </LineChart>
  </ResponsiveContainer>
)

Graph.propTypes = {
  data: PropTypes.array.isRequired
}

export default Graph
