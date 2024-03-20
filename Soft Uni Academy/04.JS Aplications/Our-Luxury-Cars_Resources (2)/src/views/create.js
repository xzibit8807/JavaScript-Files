import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFact } from "../api/data.js";


const createTamplate = (onSubmit) => html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form form-auto" @submit=${onSubmit}>
            <h2>Share Your Car</h2>
            <form class="create-form">
              <input type="text" name="model" id="model" placeholder="Model"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export async function createPage(ctx) {
  ctx.render(createTamplate(onSubmit));

  async function onSubmit(fact) {
    fact.preventDefault();
    const formData = new FormData(fact.target);

    const newFact = {
      category: formData.get("category").trim(),
      imageUrl: formData.get("image-url").trim(),
      description: formData.get("description").trim(),
      moreInfo: formData.get("additional-info").trim(),
    };

    if (Object.values(newFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await addFact(newFact);
    fact.target.reset();
    ctx.page.redirect("/dashboard");
  }
}
