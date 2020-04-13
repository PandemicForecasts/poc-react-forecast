import { Col, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import React from 'react'

const ButtonBar = ({ children }) => {
  return (
    <Row>
      <Col className="text-center">
        {children.map(c => c)}
      </Col>
    </Row>
  )
}

ButtonBar.propTypes = {
  children: PropTypes.array.isRequired
}

export default ButtonBar
