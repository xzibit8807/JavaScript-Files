import { render, html } from "../node_modules/lit-html/lit-html.js";
import { deleteFactById, getFactById } from "../services/data.js";

const root = document.querySelector("main");

function detailsTemplate(details, isLoggedIn, isOwner, onDelete) {
  return html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${details.imageUrl}" alt="example1" />
        <p id="details-title">${details.title}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">Price: €${details.price}</p>
            <p class="weight">Weight: ${details.weight}kg</p>
            <p class="top-speed">Top Speed: ${details.speed} kph</p>
            <p id="car-description">${details.about}</p>
          </div>
          <!-- Edit and Delete are only for logged-in users -->
          ${isOwner
            ? html`
                <div id="action-buttons">
                  <a href="/edit" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                </div>
              `
            : html``}
        </div>
      </div>
    </section>
  `;
}

export async function detailsView(ctx) {
  const carId = ctx.params.id;
  const details = await getFactById(carId);
  const user = ctx.authData;
  
  const isOwner = user && details._ownerId;
  const isLoggedIn = user !== undefined;

  render(detailsTemplate(details, isLoggedIn, isOwner, onDelete), root);

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteFactById(carId);
      ctx.page.redirect("/dashboard");
    }
  }
  
}
