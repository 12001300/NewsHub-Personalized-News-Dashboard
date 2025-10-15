import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import NewsCards from "./component/NewsCards";
import TabsBar from "./component/TabsBar";
import SavedArticles from "./pages/SavedArticles";

function App() {
  return (
  

    <div >
  <Navbar/>

      <Routes>
        
        <Route path="/" element={
          <>
          <TabsBar/>
          <NewsCards/>
          </>
        }/>
      
       
        <Route path="/articles/saved" element={<SavedArticles/>}/>
      </Routes>
  {/* <NewsCards/> */}
    </div>

  );
}

export default App;
