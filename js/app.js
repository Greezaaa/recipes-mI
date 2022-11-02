let recipeDiv = document.querySelector(".recipes");
fetchRecipe();
function fetchRecipe() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        // ::GET:: 404 MSG
      } else if (response.status === "et::ERR_INTERNET_DISCONNECTED") {
        // ::NO INTENET CONNECTION
      }
    })
    .then((recipe) => {
      recipe.meals.forEach((element) => {
        recipeName = element.strMeal; // recipeName
        category = element.strCategory; // Category
        thumbnail = element.strMealThumb; // Thumbnail img
        preparation = element.strInstructions; // preparacion
        videoLink = element.strYoutube;
        idMeal = element.idMeal; // Youtube link
      });
      printRecipe(
        recipeName,
        category,
        preparation,
        thumbnail,
        videoLink,
        idMeal
      );
    });
}
function printRecipe(
  recipeName,
  category,
  preparation,
  thumbnail,
  videoLink,
  idMeal
) {
  let recipe = `
  <div class="recipe">
      <h3 class="recipe__title">${recipeName}</h3>
      <div class="recipe__info">
          <a href="./category.html?cat=${category}" target="_self" class="recipe__catLink">_cat: ${category}</a>
          <a href="./meal.html?id=${idMeal}" target="_self" class="recipe__idLink">_id:${idMeal}</a>
          <a href="${videoLink}" target="_blank" class="recipe__vLink">_ver video</a>
          </div>
          <img src="${thumbnail}" class="recipe__thumbnail" alt="Smoky Lentil Chili with Squash">
          <p class="recipe__preparation">
          ${preparation}
          </p>
          
          </div>
          `;
  recipeDiv.innerHTML = recipe;
}
