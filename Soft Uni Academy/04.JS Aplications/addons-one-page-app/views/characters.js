import {render, html} from "../node_modules/lit-html/lit-html.js";
//import { handleLogin } from "../services/auth.js";

const root = document.querySelector("main");
function charactersTemplate(){
 return html`
        <!-- Dashboard page -->

 `}

 export function charactersView(){
    render(charactersTemplate(), root);
 }