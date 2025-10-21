  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the search text
    let query = document.querySelector(".form-control").value.trim().toLowerCase();

    // Define topics and their pages with #ids
    const pages = [
      { keywords: ["hawawshi", "hawashi"], url: "dinner.html#hawawshi" },
      { keywords: ["taamya", "ta'amya"], url: "breakfast.html#taamya" },
      { keywords: ["balah-elsham"], url: "lunch.html#balah-elsham" },
      { keywords: ["mahalabia"], url: "dinner.html#mahalabia" },
      { keywords: ["koshari"], url: "lunch.html#koshari" },
      { keywords: ["um-ali", "umm-ali"], url: "breakfast.html#um-ali" }
    ];

    // Try to find a match
    let found = false;
    for (let page of pages) {
      if (page.keywords.includes(query)) {
        window.location.href = page.url; // redirect to page + #id
        found = true;
        break;
      }
    }

    // If no match, show alert
    if (!found) {
      alert("Sorry, no results found for: " + query);
    }
  });





  document.querySelectorAll(".fav-btn").forEach(button => {
  button.addEventListener("click", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const recipe = {
      id: button.dataset.id,
      name: button.dataset.name,
      page: window.location.pathname.split("/").pop() // current page
    };

    // Check if already in favorites
    if (!favorites.some(fav => fav.id === recipe.id && fav.page === recipe.page)) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(recipe.name + " added to favorites!");
    } else {
      alert(recipe.name + " is already in favorites!");
    }
  });
});

