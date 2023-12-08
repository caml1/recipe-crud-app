import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formData);
    setFormData(initialState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Photo URL:</td>
            <td>
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create Recipe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;