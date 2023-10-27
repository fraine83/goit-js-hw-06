const categoriesList = document.getElementById('categories');
      const categoryItems = categoriesList.querySelectorAll('li.item');

      // Count the number of categories
      const numberOfCategories = categoryItems.length;
      console.log("Number of categories:",numberOfCategories);

      // Iterate through each category item
      categoryItems.forEach((item) => {
        const categoryTitle = item.querySelector('h2').textContent;
        const categoryElements = item.querySelectorAll('li').length;

        console.log("Category:",categoryTitle);
        console.log("Elements:",categoryElements);
      });