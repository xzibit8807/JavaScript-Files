import { render, html } from "../node_modules/lit-html/lit-html.js";
import * as API from "../services/api.js";
import { productsUrl } from "../services/index.js";

const root = document.querySelector("main");


export function searchTemplate(searchResults) {
  return html`
    <!-- Search page -->
    <section id="search">
      <div class="form">
        <h4>Search</h4>
        <form class="search-form" id="search-form" @submit=${handleSearch}>
          <input type="text" name="search" id="search-input" />
          <button type="submit" class="button-list">Search</button>
        </form>
      </div>
      <div class="search-result">
        ${searchResults.length > 0 && !!searchResults
          ? searchResults.map(
              (car) => html`
                <div class="car">
                  <img src="${car.image}" alt="${car.model}" />
                  <h3 class="model">${car.model}</h3>
                  <a class="details-btn" href="/details/${car.id}">More Info</a>
                </div>
              `
            )
          : html`<h2 class="no-available">No result.</h2>`}
      </div>
    </section>
  `;
}

export function searchView() {
  render(searchTemplate([]), root);
}

async function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.toLowerCase();

  try {
    // Simulating an API search operation with dummy data
    const response = await API.get(productsUrl);
    if(searchTerm.length > 0){
    const searchResults = response.filter((car) =>
      car.model.toLowerCase().includes(searchTerm)
    );

    render(searchTemplate(searchResults), root);
  }else{
    html`<h2 class="no-available">No result.</h2>`
  }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error, show error message, etc.
  }
}
