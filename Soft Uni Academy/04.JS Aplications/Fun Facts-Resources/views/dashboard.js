import { render, html } from "../node_modules/lit-html/lit-html.js";

const root = document.querySelector("main");


export const dashTemplate = (product) => {
    return html`
                 <!-- Dashboard page -->
          <!-- Display a div with information about every post (if any)-->
          <div class="fact">
          <img src="./images/fact 1.png" alt="example1" />
          <h3 class="category">History</h3>
          <p class="description">Uncover the intriguing tale of the shortest war in history!
            The Anglo-Zanzibar War of 1896 lasted a mere 38 minutes,
            making it an astonishingly brief conflict that's sure to leave
            you amazed by the brevity of battle.</p>
          <a class="details-btn" href="/details">More Info</a>
        </div>
        <div class="fact">
          <img src="./images/fact 2.jpg" alt="example2" />
          <h3 class="category">Science</h3>
          <p class="description">Did you know that the Earth's oceans contain enough salt to cover
            all the continents in a layer 500 feet thick?
            Dive into the depths of this salty fact and explore the wonders
            of our planet's aquatic wonders.</p>
          <a class="details-btn" href="/details">More Info</a>
        </div>
        <div class="fact">
          <img src="./images/fact 3.jpg" alt="example3" />
          <h3 class="category">Nature</h3>
          <p class="description">Prepare to be astounded by the power of hummingbirds!
            These tiny marvels can flap their wings up to 80 times per second,
            enabling them to hover, fly backward, and even upside down.
            Discover more about these delightful creatures and their
            extraordinary abilities.</p>
          <a class="details-btn" href="/details">More Info</a>
        </div>
  `;
};


function productsSection(products) {
  return html` <section id="dashboard">
    ${products.map((p) => dashTemplate(p))}
  </section>`;
}
function productsTemplate(products) {
  return html`
    <h2>Fun Facts</h2>
    ${products && products.length > 0
      ? productsSection(products)
      : html`<h2>No Fun Facts yet.</h2>`}
  `;
}


export function dashboardView(ctx) {
  render(productsTemplate(ctx.products), root);
}




