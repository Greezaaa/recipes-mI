let selectCat = document.querySelector(".categorias");
// let url_string = window.location;
// let url = new URL(url_string);
let catParam = url.searchParams.get("cat");
cats();
function cats() {
  if (catParam) {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + catParam)
      .then((catdRecipes) => catdRecipes.json())
      .then((catdRecipes) => {
        catdRecipes.meals.forEach((meal) => {
          printMeal(meal.strMeal, meal.strMealThumb, meal.idMeal);
        });
      });
  } else {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((cats) => cats.json())
      .then((cats) => {
        cats.categories.forEach((cat) => {
          printCats(cat.strCategory, cat.strCategoryThumb);
        });
      });
  }
}
function printCats(catName, catThumb) {
  selectCat = document.querySelector(".categorias");
  let cat = `
  <div class="catList__item">
    <a href="./category.html?cat=${catName}" class="catList__link" >
      <img src="${catThumb}" class="catList__img">
      <span>${catName}</span>
    </a>
  </div>
  `;
  let desc = document.createElement("div");
  desc.classList.add("preparation");
  desc.innerHTML = cat;
  selectCat.appendChild(desc);
}
function printMeal(strMeal, strMealThumb, idMeal) {
  let catRecipe = document.querySelector(".categorias");
  catRecipe.innerHTML += `
  <div class="meatList_item">
    <a href="./meal.html?id=${idMeal}" alt="">
      <img src="${strMealThumb}" />
      <span class="mealTitle">${strMeal}</span>
    </a>
  </div>
  `;
}
