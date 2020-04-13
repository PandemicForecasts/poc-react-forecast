import { Button, Col, Container, Row } from 'reactstrap'
import ButtonBar from '~/components/button-bar'
import Graph from '~/components/graph'
import Nav from '~/components/nav'
import React, { useState } from 'react'

const data1 = require('~/data/test1.json')
const data2 = require('~/data/test2.json')

const App = () => {
  const [forecastData, setforecastData] = useState(['1', data1])

  const changeGraph = () => {
    const data = forecastData[0] === '1' ? ['2', data2] : ['1', data1]
    setforecastData(data)
  }

  return (
    <div>
      <Nav/>
      <Container>
        <Row className="d-flex align-items-center" style={{ height: '80vh' }}>
          <Col style={{ height: '80%' }}>
            <Graph data={forecastData[1]} />
          </Col>
        </Row>
        <ButtonBar>
          <Button key='a' onClick={changeGraph}>Button A</Button>
          <Button key='b' onClick={changeGraph}>Button B</Button>
        </ButtonBar>
      </Container>
    </div>
  )
}

export default App
