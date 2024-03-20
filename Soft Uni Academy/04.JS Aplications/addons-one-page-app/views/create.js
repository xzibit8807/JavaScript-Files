import {render, html} from "../node_modules/lit-html/lit-html.js";


const root = document.querySelector("main");

function createTemplate(){
 return html`
              <!-- Create Page (Only for logged-in users) -->
 `}

 export function createView(){
    render(createTemplate(), root);
 }