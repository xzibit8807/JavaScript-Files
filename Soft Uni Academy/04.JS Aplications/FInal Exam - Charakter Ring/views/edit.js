import {render, html} from "../node_modules/lit-html/lit-html.js";
//import { handleLogin } from "../src/services/auth.js";

const root = document.querySelector("main");
function editTemplate(){
 return html`
     <!-- Edit Page (Only for logged-in users) -->
     <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
 `}

 export function editView(){
    render(editTemplate(), root);
 }