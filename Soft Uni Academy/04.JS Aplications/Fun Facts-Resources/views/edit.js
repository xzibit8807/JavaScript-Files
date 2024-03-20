
import { render, html } from "../node_modules/lit-html/lit-html.js"


const root = document.querySelector("main");
function editTemplate() {
    return html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
      <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
      <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
        cols="50"></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>
 `}

export function editView() {
    render(editTemplate(), root);
}