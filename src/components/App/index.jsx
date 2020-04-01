import React from 'react'

// import Sidebar from '~/components/Sidebar'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'UK',
    pv: [1000, 2400]
  },
  {
    name: 'Italy',
    pv: [1400, 2400]
  },
  {
    name: 'China',
    pv: [400, 2400]
  }
]

const App = () => (
  <div style={{ height: '100vh' }}>
    {/* <Sidebar /> */}
    <BarChart width={750} height={200} data={data} layout={'vertical'}>
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis dataKey="name" type="category" />
      <XAxis type="number"/>
      <Tooltip />
      <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  </div>
)

export default App
