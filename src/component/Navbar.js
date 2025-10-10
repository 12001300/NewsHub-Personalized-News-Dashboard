import React from 'react'
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
export default function Navbar() {
    const Search =styled("div")(({theme})=>({
        position:"relative",
        borderRadius:theme.shape.borderRadius,
        backgroundColor:theme.palette.common.white,
        marginLeft : "auto"
        
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
    color:"inherit",
    width:"100%",
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
     '&::placeholder': {
      color: theme.palette.secondary.main,
      opacity: 1, // ensures the color is not faded
    },
  },
}))
  return (
    <Box  >
      <AppBar color='secondary'>
        <Toolbar  >
            <IconButton component={Link} to="/">
                <NewspaperIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography  variant='h6' sx={{marginLeft:"10px"}}>
                NewsHub
            </Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon color='secondary'/>
                </SearchIconWrapper>
                <StyledInputBase      placeholder='Search...'/>
            </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
