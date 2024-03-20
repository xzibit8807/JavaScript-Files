import page from "./node_modules/page/page.mjs"
import { productsView } from "./views/products.js"


page ("/products", productsView);

page.start();
