import React, { use, useEffect } from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { removeSavedArticle, setSavedArticles } from '../store/NewsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SavedArticles() {
    const SavedArticles=useSelector(state=>state.news.SavedArticles)
    const dispach=useDispatch()
   
   
  const handlechange=(item)=>{
        
          const isAlreadySaved=SavedArticles.find(article=>article.title==item.title)
          if(isAlreadySaved){
            dispach(removeSavedArticle(item))
            return
         
          }

          dispach(setSavedArticles(item))
         
          
        }
    
  return (
   <Container sx={{display:"flex" ,marginTop:"20px", flexDirection:{xs:"column",sm:"row"}, flexWrap:"wrap",justifyContent:"center" , gap:3}}>
    {(SavedArticles? SavedArticles:[]).map(item=> {return(

         <Card sx={{ width:{xs:"100%", sm:"30%"} }} key={item.source.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.urlToImage}
          alt={item.author}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
          <Checkbox checked  onClick={()=>handlechange(item)} icon={<FavoriteBorder color='secondary'/>} checkedIcon={<Favorite color='secondary' />} />
        
      </CardActions>
    </Card>
    )})}

   </Container>
  )
}
