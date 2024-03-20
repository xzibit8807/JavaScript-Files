import { render, html } from "../node_modules/lit-html/lit-html.js";
//import { editFactById, getFactById } from "../services/data.js";

const root = document.querySelector("main");

function editTemplate() {
  return html`
                <!-- Edit Page (Only for logged-in users) -->
   <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" >
              <input type="text" name="model" id="model" placeholder="Model" />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                value=""
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value=""
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                value=""
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                value=""
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                value=""
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
 `}


export async function editView(ctx) {
  //const carId = ctx.params.id;

 // const car = await getFactById(carId);

  render(editTemplate(), root);
/*
  async function onSubmit(car) {
    car.preventDefault();
    const formData = new FormData(car.target);

    const editCar = {
      category: formData.get("category").trim(),
      imageUrl: formData.get("image-url").trim(),
      description: formData.get("description").trim(),
      moreInfo: formData.get("additional-info").trim(),
    };

    if (Object.values(editCar).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editFactById(carId, editCar);
    car.target.reset();
    ctx.page.redirect(`/details/${carId}`);
  }
*/
}
