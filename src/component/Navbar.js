import React, { useState } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';
import { searchArticles } from '../store/NewsSlice';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
export default function Navbar() {
  const [searchValue,setSearchValue]=useState("")
  const dispach=useDispatch()
  // const handelSearchChange=(event)=>{
  //   event.preventDefault()
  //   const searchnewV=event.target.value
  //   setSearchValue(searchnewV)

  //   dispach(searchArticles(searchnewV))
  //   console.log(searchnewV)
  // }
    const Search =styled("div")(({theme})=>({
        position:"relative",
        borderRadius:theme.shape.borderRadius,
        backgroundColor:theme.palette.common.white,
        marginLeft : "auto",
        minWidth:180, [theme.breakpoints.up('sm')]: {
      width: '20ch',
      
    },
    width: '100%'
    ,
        transition: theme.transitions.create('width'),
        
    }))
    const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})); 
const StyledInputBase= styled(InputBase)(({theme})=>({
    color:theme.palette.secondary.main,
  
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      
    },
    width: '100%',
    '&::placeholder': {
     color: theme.palette.secondary.main,
     opacity: 1, // ensures the color is not faded
   },
  },
}))
  return (
    <Box  >
      <AppBar color='secondary'>
        <Toolbar sx={{display:"flex",alignItems:"center"}}>
            <IconButton component={Link} to="/">
                <NewspaperIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography  variant='h6' sx={{marginLeft:"10px"}}>
                NewsHub
            </Typography>
            {/* <Search>
            </Search> */}
            <Box sx={{marginLeft:"auto"}}>
             <Tooltip title="Saved Articles"  placement="bottom">   
            <Button color='secondary' component={Link} to="/articles/saved">
            <TurnedInIcon sx={{ color: 'white' }} />
            </Button>
          </Tooltip>
            <TextField
  variant="outlined"
  placeholder="Search…"
  value={searchValue}
  onChange={(e) => {setSearchValue(e.target.value)
  dispach(searchArticles(e.target.value))
  }
  }
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon color="secondary" />
      </InputAdornment>
    ),
  }}
  sx={{
    marginLeft: "15px",
    backgroundColor: "white",
    borderRadius: 2,
    minWidth: 180,
    width: { xs: "30%", sm: "28ch" }, // slightly wider
    '& .MuiOutlinedInput-root': {
      color: 'secondary.main',
      paddingRight: 0,
      '& fieldset': {
        borderColor: 'secondary.main',
      },
      '&:hover fieldset': {
        borderColor: 'secondary.dark',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'secondary.main',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'secondary.main',
      '&.Mui-focused': {
        color: 'secondary.main',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: "8px 8px 8px 0px",
      color: 'secondary.main',
      // textAlign: "center",
      overflowX: "auto",         // enable horizontal scroll
      whiteSpace: "nowrap",      // prevent wrapping
      '&::placeholder': {
        color: 'secondary.main',
        opacity: 1,
        textAlign: "center"
      },
      // Optional: show scrollbar only when needed
      '&::-webkit-scrollbar': {
        height: '4px',
      },
    },
  }}
/>

            </Box>
               
          


        </Toolbar>
      </AppBar>
    </Box>
  )
}
