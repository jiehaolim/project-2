import "./App.css"
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeNavBar from "./pages/Home/HomeNavBar";
import HomePage from "./pages/Home/HomePage";
import SetsHome from "./pages/Sets/SetsHome";
import SetsHomeBody from "./pages/Sets/SetsHomeBody";
import SetsSearchResults from "./pages/Sets/SetsSearchResults";
import SetsSingleResult from "./pages/Sets/SetsSingleResult";
import MinifigsHome from "./pages/Minifigs/MinifigsHome";
import MinifigsHomeBody from "./pages/Minifigs/MinifigsHomeBody";
import MinifigsSearchResults from "./pages/Minifigs/MinifigsSearchResults";
import MinifigsSingleResults from "./pages/Minifigs/MinifigsSingleResult";
import WishlistHome from "./pages/Wishlist/WishlistHome";

function App() {
  const [modal, setModal] = useState(false)
  const [wishlistObj, setWishlistObj] = useState({
    sets: [],
    minifigs: [],
  });

  const addToWishlist = () => {
    console.log("addToWishlist")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* NavBar for whole website */}
          <Route path="/" element={<HomeNavBar />}>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* Sets */}
            <Route path="sets" element={<SetsHome />}>
              <Route path="" element={<SetsHomeBody />} />
              <Route path="search" element={<SetsSearchResults addToWishlist={addToWishlist} />} />
              <Route path="result/:setnum" element={<SetsSingleResult addToWishlist={addToWishlist} />}/>
            </Route>
            
            
            {/* Minifigures */}
            <Route path="minifigures" element={<MinifigsHome />}>
              <Route path="" element={<MinifigsHomeBody />} />
              <Route path="search" element={<MinifigsSearchResults addToWishlist={addToWishlist} />} />
              <Route path="result/:setnum" element={<MinifigsSingleResults addToWishlist={addToWishlist} />}/>
            </Route>
            
            
            {/* Wishlist */}
            <Route path="wishlist" element={<WishlistHome wishlistObj={wishlistObj} />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
