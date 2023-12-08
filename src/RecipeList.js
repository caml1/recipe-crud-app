import React from "react";

function RecipeList({ recipes, onDelete }) {
  return (
    <div
 
className="recipe-list">

      
<table>

        
<thead>

          
<tr>

            
<th>Name</th>

            
<th>Cuisine</th>

            
<th>Photo</th>

            
<th>Ingredients</th>

            
<th>Preparation</th>

            
<th>Actions</th>

          
</tr>

        
</thead>

        
<tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>

              
<td>{recipe.cuisine}</td>

              
<td>

                
<img
 
src={recipe.photo}
 
alt={recipe.name} />

              
</td>

              
<td
 
className="content_td">

                
<p>{recipe.ingredients}</p>

              
</td>

              
<td
 
className="content_td">

                
<p>{recipe.preparation}</p>

              
</td>

              
<td>

                
<button
 
name="delete"
 
onClick={() => onDelete(recipe.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;