import { createSlice } from "@reduxjs/toolkit";
import articles from "../mocks/articles.json"
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
    else{ state.articles=articles.articles}}
}
})
export const{setCategory}=newsSlice.actions
export default newsSlice.reducer