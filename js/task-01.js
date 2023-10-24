const categoriesList = document.getElementById("categories");

        // Select all li.item elements
        const categoryItems = categoriesList.querySelectorAll("li.item");

        // Count the number of categories
        const numCategories = categoryItems.length;

        // Display the number of categories
        console.log(`Number of categories: ${numCategories}`);

        // Loop through each category and display category name and elements
        categoryItems.forEach((category) => {
            const categoryName = category.querySelector("h2").textContent;
            const categoryElements = category.querySelectorAll("ul > li");
            const numElements = categoryElements.length;

            // Display category and elements
            console.log(`Category: ${categoryName}`);
            console.log(`Elements: ${numElements}`);
               });