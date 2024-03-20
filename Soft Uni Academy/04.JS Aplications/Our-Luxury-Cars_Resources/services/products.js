//import page from "../node_modules/page/page.mjs";

import { productsUrl } from "./index.js";
//import { getAuthData } from "./auth.js";

export function getProducts(ctx, next) {
  fetch(productsUrl)
    .then((res) => res.json())
    .then((data) => {
      ctx.products = data;
      next();
    });
}

export function getProduct(ctx, next) {
  fetch(`http://localhost:3030/data/cars/${ctx.params.id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ctx.product = data;
      next();
    });
}

export function getBuyCount(ctx, next) {
  fetch(
    `http://localhost:3030/data/bought?where=productId%3D%22${ctx.product._id}%22&distinct=_ownerId&count`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ctx.boughtCount = data;
      next();
    });
}
