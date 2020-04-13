import { Container } from 'reactstrap'
import Graph from '~/components/graph'
import Nav from '~/components/nav'
import React from 'react'

const App = () => {
  return (
    <div>
      <Nav/>
      <Container className="d-flex align-items-center" style={{ height: '90vh' }}>
        <Graph/>
      </Container>
    </div>
  )
}

export default App
