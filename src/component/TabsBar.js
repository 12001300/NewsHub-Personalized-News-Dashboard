import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import { fetchArticles } from '../store/NewsSlice'
import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../store/NewsSlice'


export default function TabsBar() {
  const dispach=useDispatch()
  const [value, setValue] = useState('general');
  
  const handleChange=(event,newValue)=>{
    event.preventDefault();
    setValue(newValue);
    dispach(setCategory(newValue))
    
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
        <Tab  value="general" label="General" />
        <Tab value="technology" label="Technology" />
        <Tab value="sports" label="Sports" />
        <Tab value="politics" label="Politics" />
      </Tabs>
        </AppBar>
    </Box>
  )
}
