async function fetchAndRenderMenu() {
  const response = await fetch("api/meals.json");
  const meals = await response.json();

  const menu = document.querySelector(".pizzeria-menu__container");
  renderMenu(meals);

  function renderMenu(meals) {
    meals.forEach((pizza) => {
      const article = document.createElement("article");
      article.classList.add("pizzeria-menu__item");

      article.innerHTML = `
            <div class="pizzeria-menu__item-image">
              <img src="styles/img//pizzas/${pizza.id}.webp" alt="Pizza image" />
            </div>
            <div class="pizzeria-menu__item-description">
              <p class="pizzeria-menu__item-title">${pizza.title}</p>
              <p class="pizzeria-menu__item-ingredients">
                Ingredients: ${pizza.ingredients.join(", ")}
              </p>
              <p class="pizzeria-menu__item-price">
                ${
                  pizza.price
                } $ <a href="#" class="pizzeria-menu__item-button">Add to cart</a>
              </p>
            </div>
          `;
      menu.appendChild(article);
    });
  }
}

fetchAndRenderMenu();
