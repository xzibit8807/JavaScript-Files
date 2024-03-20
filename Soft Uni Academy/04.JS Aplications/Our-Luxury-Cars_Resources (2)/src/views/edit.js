import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFactById, getFactById } from "../api/data.js";

const editTamplate = (fact, onSubmit) => html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form form-auto" @submit=${onSubmit}>
            <h2>Edit Your Car</h2>
            <form class="edit-form">
              <input type="text" name="model" id="model" placeholder="Model" />
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
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;



export async function editPage(ctx) {
  const factId = ctx.params.id;

  const fact = await getFactById(factId);
  ctx.render(editTamplate(fact, onSubmit));

  async function onSubmit(fact) {
    fact.preventDefault();
    const formData = new FormData(fact.target);

    const editFact = {
      category: formData.get("category").trim(),
      imageUrl: formData.get("image-url").trim(),
      description: formData.get("description").trim(),
      moreInfo: formData.get("additional-info").trim(),
    };

    if (Object.values(editFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editFactById(factId, editFact);
    fact.target.reset();
    ctx.page.redirect(`/details/${factId}`);
  }
}
