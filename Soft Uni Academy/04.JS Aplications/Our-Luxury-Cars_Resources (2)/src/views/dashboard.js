import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const root = document.querySelector("main");

const dashboardTemplate = (cars) => html` <h3 class="heading">Our Cars</h3>
<section id="dashboard">
  ${cars.length == 0
    ? html`    <h3 class="nothing">Nothing to see yet</h3>`
    : cars.map(
        (e) => html`       
        <div class="fact">
    <img src="${e.imageUrl}" alt="example1" />
    <h3 class="category">${e.category}</h3>
    <p class="description">${e.description}</p>
    <a class="details-btn" href="/details/${e._id}">More Info</a>
  </div>
        `
      )}
</section>`;


export async function dashboardPage(ctx) {
  const events = await getAllFacts();
  console.log(events);
  ctx.render(dashboardTemplate(events));
}
