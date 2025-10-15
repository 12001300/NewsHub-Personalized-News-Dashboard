import React, { useEffect } from 'react'
import axios from 'axios'
// import articles from "../mocks/articles.json"
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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchArticles, removeSavedArticle, setSavedArticles } from '../store/NewsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function NewsCards() {
  const dispach=useDispatch()
    useEffect(()=>{dispach(fetchArticles())},[])
        const articles =useSelector(state=>state.news.articles)
        const savedArticles=useSelector(state=>state.news.SavedArticles)

        const loading =useSelector(state=>state.news.loading)
        console.log(articles);
        const handlechange=(item)=>{
        
          const isAlreadySaved=savedArticles.find(article=>article.title==item.title)
          if(isAlreadySaved){
            dispach(removeSavedArticle(item))
            return
          }

          dispach(setSavedArticles(item))
         
          
        }
        useEffect(()=>console.log(savedArticles),[savedArticles])
  return (
    <Container sx={{display:"flex" ,marginTop:"20px", flexDirection:{xs:"column",sm:"row"}, flexWrap:"wrap",justifyContent:"center" , gap:3}}>

      {loading ? <Box sx={{
       alignitems:"center",
       justifyContent:"center",
       display:"flex",
       width:"100%",
       minHeight:"100vh"
      }}>
        <CircularProgress color="secondary" />
      </Box> :(Array.isArray(articles) ?articles:[]).map(item=> {return(
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
          {savedArticles.find(article=>article.title==item.title)?<Checkbox  checked onClick={()=>handlechange(item)} icon={<FavoriteBorder color='secondary'/>} checkedIcon={<Favorite color='secondary' />}/>:<Checkbox   onClick={()=>handlechange(item)} icon={<FavoriteBorder color='secondary'/>} checkedIcon={<Favorite color='secondary' />} />}
          {/* <Checkbox   onClick={()=>handlechange(item)} icon={<FavoriteBorder color='secondary'/>} checkedIcon={<Favorite color='secondary' />} />
         */}
      </CardActions>
    </Card>
    )})}
    {/* {(Array.isArray(articles) ?articles:[]).map(item=> {return(
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
        <Button size="small" color="scondary" >
          <Checkbox    icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Button>
      </CardActions>
    </Card>
    )})} */}
    </Container>

  )
}
