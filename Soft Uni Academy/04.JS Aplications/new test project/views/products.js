import { render, html } from "./../node_modules/lit-html/lit-html.js";

import { productsURL } from "../Constants/index.js";
import * as productService from "./../services/products.js"

function projectTemplate(products) {
    return html`
    <h1>Products</h1>
    <section class="section">
        ${products.map((product) => html`
        <div class="card" style="width: 18rem;">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.make}</h5>
    <p class="card-text">${product.description}</p>
    <a href=${`${productsURL}/${product.id}`} class="btn btn-primary">View more</a>
  </div>
</section>
        `)}
    </div>
    ` 
}

const rootEl = document.getElementById("root")

export function productsView() {
    productService.getProducts().then((products) => {
        render(projectTemplate(), rootEl)
    })

    render(productsView(), rootEl);
}