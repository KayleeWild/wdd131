import recipes from './recipes.mjs';
function random(num){
    return Math.floor(Math.random()*num);
}
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}
function recipeTemplate(recipe){
    return `<section class="recipeCard">
    <img src="${recipe.image}" alt="${recipe.name}">
    <div class="cardText">
        <div class="tags">
            ${tagsTemplate(recipe.tags)}
        </div>
        <h2 class="recipeName">${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
    </div>
</section>`;
}
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ``;
    tags.forEach(tag => {
        html += `<p>${tag}</p>`
    });
	return html;
}
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
for (let i = 1; i<= 5; i++){
    if (i < rating){
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`
    } else {
		// else output an empty star
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
}
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const main = document.querySelector("main");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let recipeHtml = ``;
    recipeList.forEach(recipe => {
        recipeHtml += recipeTemplate(recipe);
    })
	// Set the HTML strings as the innerHTML of our output element.
    return main.innerHTML = recipeHtml;
}
function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
function searchHandler(){
    const query = document.querySelector("input").value;
    const lowerQuery = query.toLowerCase();
    const filteredAndSorted = filterRecipes(lowerQuery);
    renderRecipes(filteredAndSorted);
}
function filterRecipes(query){
    function searchContains(recipe){
        return(
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.find((item)=> item.toLowerCase().includes(query))
        );
    }
    const filtered = recipes.filter(searchContains);
    const sorted = filtered.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } 
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return sorted;
}
init();
document.querySelector("button").addEventListener("click", searchHandler);