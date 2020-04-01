import React from 'react'

import { Button, Drawer, MenuItem, Select } from '@material-ui/core'

const Sidebar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
  >
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <Button>
      something
    </Button>
    <Button>
      somethon
    </Button>
  </Drawer>
)

export default Sidebar
