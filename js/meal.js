let mealById = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
let mealId = url.searchParams.get("id");
let arrIds = [];
let mealDiv = document.querySelector(".meal");
fetch(mealById + mealId)
  .then((response) => response.json())
  .then((meal_data) => {
    meal_data.meals.forEach((meal) => {
      mealName = meal.strMeal; // mealName
      category = meal.strCategory; // Category
      thumbnail = meal.strMealThumb; // Thumbnail img
      preparation = meal.strInstructions; // preparacion
      videoLink = meal.strYoutube;
      idMeal = meal.idMeal; // Youtube link
      strIngredient1 = meal.strIngredient1;
      strIngredient2 = meal.strIngredient2;
      strIngredient3 = meal.strIngredient3;
      strIngredient4 = meal.strIngredient4;
      strIngredient5 = meal.strIngredient5;
      strTags = meal.strTags;

      printmeal(
        mealName,
        idMeal,
        category,
        preparation,
        thumbnail,
        videoLink,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strTags
      );
    });
  });
function printmeal(
  mealName,
  id,
  category,
  preparation,
  thumbnail,
  videoLink,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strTags
) {
  mealDiv.innerHTML += `
  
  <img src="${thumbnail}" class="meal__thumbnail" alt="">
  <div class="meal__info">
  <h3 class="meal__title">${mealName}</h3>
        <span>_id: ${id}</span>
        <span>_tag: ${(strTags = "n/a")}</span>
        <a href="./category.html?cat="${category}target="_self" class="recipe__catLink">_cat: ${category}</a>
        <a href="${videoLink}" target="_blank" class="recipe__vLink">_ver video</a>
        
        <ul class="ingridients">
          <li>${strIngredient1}</li>
          <li>${strIngredient2}</li>
          <li>${strIngredient3}</li>
          <li>${strIngredient4}</li>
          <li>${strIngredient5}</li>
        </ul>
        <span>${preparation}</span>
    </div>

  `;
}
