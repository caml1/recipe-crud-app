import React, { useState } from
 
"react";
import
 
"./App.css";
import RecipeCreate from
 
"./RecipeCreate";
import RecipeList from
 
"./RecipeList";
import RecipeData from
 
"./RecipeData";

function
 
App() {
  const [recipes, setRecipes] = useState(RecipeData);


  
// Function to create a new recipe
  const handleCreateRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Function to delete a recipe
  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} />
      <RecipeCreate onCreate={handleCreateRecipe} />
    </div>
  );
}

export default App;