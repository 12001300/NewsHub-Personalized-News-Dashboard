import { createSlice } from "@reduxjs/toolkit";
// import articles from "../mocks/articles.json"
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import SavedArticles from "../pages/SavedArticles";
export const fetchArticles=createAsyncThunk("news/fetchArticles",async()=>{
    const res=await axios.get(`http://localhost:5000/news`)
    return res.data
})
export const newsSlice=createSlice({
name:"news",
initialState:{category:"general",articles:[],loading:false , allArticles:[] , error:null , SavedArticles:JSON.parse(localStorage.getItem("savedArticles")) || []
},
reducers:{

    setSavedArticles:(state,action)=>{
        const savedArticle=action.payload 
        const existedArticle=state.SavedArticles.find(item=>item.title===savedArticle.title)
        if(existedArticle){
            return
        }
        state.SavedArticles.push(savedArticle)
        localStorage.setItem("savedArticles",JSON.stringify(state.SavedArticles))
        
     
      
    },
    removeSavedArticle:(state,action)=>{
        const articleToRemove=action.payload
        state.SavedArticles=state.SavedArticles.filter(item=>item.title!==articleToRemove.title)
         localStorage.setItem("savedArticles", JSON.stringify(state.SavedArticles));
    }
    ,setCategory:(state,action)=>{
        const newCategory=action.payload
        state.category=newCategory
        if (newCategory!=="general"){
        const filterArticles=state.allArticles.filter(item=>item.category===newCategory)
            state.articles= filterArticles
    }
    else{ state.articles=state.allArticles}},
    searchArticles:(state,action)=>{
const searchValue=action.payload.toLowerCase()
if (searchValue!==""){
    const searchArticls=state.allArticles.filter(item=> { return item.title.toLowerCase().includes(searchValue)|| item.description.toLowerCase().includes(searchValue)})
    state.articles=searchArticls
    
}
else{ state.articles=state.allArticles}
}
},
extraReducers:(builder)=>{
    builder.addCase(fetchArticles.fulfilled,(state,action)=>{
        state.allArticles=action.payload
        state.articles=action.payload
        console.log(state.allArticles);
        state.loading=false
        state.error=null
    })
    builder.addCase(fetchArticles.pending,(state)=>{
        state.loading=true 
        console.log("loading...")
    })
    builder.addCase(fetchArticles.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
}

})
export const{setCategory,searchArticles,setSavedArticles,removeSavedArticle}=newsSlice.actions
export default newsSlice.reducer