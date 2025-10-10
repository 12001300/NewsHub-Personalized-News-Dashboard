import React from 'react'
import axios from 'axios'
import articles from "../mocks/articles.json"
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
export default function NewsCards() {
    
        
  return (
    <Container sx={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"center" , gap:3}}>
    {articles.articles.map(item=> {return(
        <Card sx={{ width:"25%" }} key={item.source.id}>
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
        <Button size="small" color="primary">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Button>
      </CardActions>
    </Card>
    )})}
    </Container>

  )
}
