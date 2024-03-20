import {render, html} from "../node_modules/lit-html/lit-html.js";


const root = document.querySelector("main");
function detailsTemplate(){
 return html`

 `}

 export function detailsView(){
    render(detailsTemplate(), root);
 }