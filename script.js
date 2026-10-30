const recipes = [
    {
        name: "Mediterranean Chickpea Salad",
        image: "images/mediterranean.jpg",
        prep: 10,
        cook: 0,
        description: "A refreshing protein-packed salad toasted in a lemon-olive oil dressing."
    },
     {
        name: "Avocado & Tomato Wholegrain Toast",
        image: "images/avocado.jpg",
        prep: 5,
        cook: 5,
        description: "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes."
    },
    {
        name: "One-pan Lemon Garlic Salmon with Asparagus",
        image: "images/lemongarlic.jpg",
        prep: 5,
        cook: 12,
        description: "A 15-minute weeknight dinner of flaky salmon and tender asparagus."
    },
    {
        name: "Quinoa Veggie Power Bowl",
        image: "images/quinoa.jpg",
        prep: 10,
        cook: 15,
        description: "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats."
    },
    {
        name: "Sweet Potato Black Bean Tacos",
        image: "images/blackbeanjpg.jpg",
        prep: 10,
        cook: 15,
        description: "Smoky roasted sweet potatoes and black beans tucked into warm tortillas."
    },
   
    {
        name: "Greek Yogurt Berry Parfait",
        image: "images/greek.jpg",
        prep: 5,
        cook: 0,
        description: "Layers of creamy yogurt, fresh berries and crunchy oats for a high protein snack."
    },
    {
        name: "Lentil and Spinach soup",
        image: "images/lentilspinachsoup.jpg",
        prep: 10,
        cook: 20,
        description: "A hearty 30-minute soup rich in plant protein and iron."
    },
    {
        name: "Banana Oat Pancakes",
        image: "images/banana.jpg",
        prep: 5,
        cook: 10,
        description: "Flour-free pancakes sweetened naturally with ripe bananas."
    },
];

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const prepFilter = document.getElementById("prep-filter");
const cookFilter = document.getElementById("cook-filter");
const recipeCount = document.getElementById("recipe-count");

function displayRecipes(items) {
    recipeList.innerHTML = "";

    recipeCount.textContent = `${items.length} recipes found`;

    if (items.length === 0) {
        recipeList.innerHTML = "<p>No recipes found. Try another search.</p>";
        return;
    }

    items.forEach(function(recipe) {
        const card = document.createElement("article");
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p>Prep: ${recipe.prep} min</p>
                <p>Cook: ${recipe.cook} min</p>
                <button type="button">View recipe</button>
            </div>
        `;

        recipeList.appendChild(card);
    });
}

function filterRecipes() {
    const searchText = searchInput.value.toLowerCase().trim();
    const maxPrep = prepFilter.value;
    const maxCook = cookFilter.value;

    const filteredRecipes = recipes.filter(function(recipe) {
        const matchesSearch =
            recipe.name.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText);

        const matchesPrep =
            maxPrep === "all" || recipe.prep <= Number(maxPrep);

        const matchesCook =
            maxCook === "all" || recipe.cook <= Number(maxCook);

        return matchesSearch && matchesPrep && matchesCook;
    });

    displayRecipes(filteredRecipes);
}

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    filterRecipes();
});

searchInput.addEventListener("input", filterRecipes);
prepFilter.addEventListener("change", filterRecipes);
cookFilter.addEventListener("change", filterRecipes);

displayRecipes(recipes);



const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});