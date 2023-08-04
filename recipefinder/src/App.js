import "./App.css";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

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
    console.log(data);
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
      <SearchBar
        value={query}
        handleSubmit={handleSubmit}
        onChange={(event) => setQuery(event.target.value)}
        isloading={isloading}
      />

      <div id="recipes">
        {recipes? (
          recipes.map((recipe) => {
            return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
          })
        ) : (
          <h2>"No Recipes Found"</h2>
        )}
      </div>
    </div>
  );
}

export default App;
