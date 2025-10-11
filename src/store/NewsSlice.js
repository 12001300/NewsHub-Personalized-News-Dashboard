import { createSlice } from "@reduxjs/toolkit";
import articles from "../mocks/articles.json"
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchArticles=createAsyncThunk("news/fetchArticles",async()=>{
    const res=await axios.get("http://api.mediastack.com/v1/news?access_key=a8b49264475db43378f34a5075d00634&languages=en&categories=general,politics,technology,sports&limit=20")
    return res.data;
})
export const newsSlice=createSlice({
name:"news",
initialState:{category:"general",articles:articles.articles},
reducers:{

    setCategory:(state,action)=>{
        const newCategory=action.payload
        state.category=newCategory
        if (newCategory!=="general"){
        const filterArticles=articles.articles.filter(item=>item.category===newCategory)
            state.articles= filterArticles
    }
    else{ state.articles=articles.articles}},
    searchArticles:(state,action)=>{
const searchValue=action.payload.toLowerCase()
if (searchValue!==""){
    const searchArticls=articles.articles.filter(item=> { return item.title.toLowerCase().includes(searchValue)|| item.description.toLowerCase().includes(searchValue)})
    state.articles=searchArticls
    
}
else{ state.articles=articles.articles}
}
},
extraReducers:(builder)=>{
    builder.addCase(fetchArticles.fulfilled,(state,action)=>{
        console.log(action.payload)
        // state.articles=action.payload
    })
}

})
export const{setCategory,searchArticles}=newsSlice.actions
export default newsSlice.reducer