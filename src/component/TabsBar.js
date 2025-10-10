import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import React from 'react'


export default function TabsBar() {
  const [value, setValue] = useState('one');
  const handleChange=(event,newValue)=>{
    event.preventDefault();
    setValue(newValue);
  }
  return (
   <Box sx={{ width: '100%' ,padding :"0px",marginTop:"70px" , }}  >
      <AppBar color='disabeled' position='static' justifyContent="center" alignItems="center">

      <Tabs centered
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        >
        <Tab  value="one" label="General" />
        <Tab value="two" label="Technology" />
        <Tab value="three" label="Sports" />
        <Tab value="four" label="Politics" />
      </Tabs>
        </AppBar>
    </Box>
  )
}
