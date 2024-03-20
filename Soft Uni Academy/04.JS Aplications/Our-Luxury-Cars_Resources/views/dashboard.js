import { render, html } from "../node_modules/lit-html/lit-html.js";
import * as API from "../services/api.js";
import { productsUrl } from "../services/index.js";

const root = document.querySelector("main");

async function fetchAndRender() {
  try {
    const element = await API.get(productsUrl);
  //  const element = response;

    render(dashboardTemplate(element), root);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error, show error message, etc.
  }
}

function dashboardTemplate(element) {
  return html`
    <!-- Dashboard page -->
    <h3 class="heading">Our elements</h3>
    <section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
      ${element && element.length > 0
        ? element.map(
            (car) => html`
              <div class="car img">
                <img src="${car.imageUrl}" alt="example1" />
                <h3 class="car">${car.model}</h3>
                <div class="nothing">
                  <p class="specs">${car.price}</p>
                  <p class="specs">${car.weight}</p>
                  <p class="specs">${car.speed}</p>
                  <a class="details-btn" href="/details/${car._id}">More Info</a>
                </div>
              </div>
            `
          )
        : html`<h2 class="nothing">No result.</h2>`}
    </section>
  `;
}

export function dashboardView() {
  fetchAndRender();
}
