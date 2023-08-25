import "./App.css";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import { Vortex } from  'react-loader-spinner'
import { useState, useEffect } from "react";


function App() {
  const [isloading, setIsloading] = useState(false);
  const [query, setQuery] = useState(" ");
  const [recipes, setRecipes] = useState([]);

  const getData = async () => {
    setIsloading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    const data = await res.json();
    console.log("data", data);
    setRecipes(data.meals);
    console.log(data.meals)
    setIsloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes();
   getData();
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar  id="searchBar"
        value={query}
        handleSubmit={handleSubmit}
        onChange={(event) => setQuery(event.target.value)}
        isloading={isloading}
      />

      <div id="recipes">
        {recipes? (
          recipes.map((element) => {
            return <RecipeCard key={element.idMeal} element={element} />;
          })
        ) : (
          
        <div id="spinner">
          <Vortex 
  visible={true}
  height="150"
  width="150"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>

</div>
 )}
      </div>
    </div>
  );
}

export default App;
