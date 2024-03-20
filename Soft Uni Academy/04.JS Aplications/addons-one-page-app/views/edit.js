import {render, html} from "../node_modules/lit-html/lit-html.js";


const root = document.querySelector("main");
function editTemplate(){
 return html`
 `}

 export function editView(){
    render(editTemplate(), root);
 }