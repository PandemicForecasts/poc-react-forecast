import React, { useState } from 'react'

import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap'

const Navo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img width="200px" src="https://images.squarespace-cdn.com/content/5e726014c638b1006155766e/1585075244956-7IAQK99KS6IY42GI59W9/PF-Logo.png?content-type=image%2Fpng"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-dark" href={process.env.MAIN_SITE_BASE_URL}>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href={process.env.MAIN_SITE_BASE_URL + '/blog'}>FORECASTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href={process.env.MAIN_SITE_BASE_URL + '/latest-data'}>LATEST DATA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" href={process.env.MAIN_SITE_BASE_URL + '/join'}>JOIN US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navo
