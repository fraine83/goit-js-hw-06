const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];
 // Get the <ul> element by its id
        const ingredientsList = document.getElementById("ingredients");

        // Create and insert <li> elements for each ingredient
        ingredients.forEach((ingredient) => {
            // Create a new <li> element
            const listItem = document.createElement("li");

            // Set the text content to the ingredient
            listItem.textContent = ingredient;

            // Add the "item" class to the <li> element
            listItem.classList.add("item");

            // Append the <li> element to the <ul> element
            ingredientsList.appendChild(listItem);
        });
