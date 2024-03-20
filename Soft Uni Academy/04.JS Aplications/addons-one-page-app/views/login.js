import {render, html} from "../node_modules/lit-html/lit-html.js";
import { handleLogin } from "./../services/auth.js";
// toDo:             <form class="login-form" @submit=${handleLogin}>

const root = document.querySelector("main");
function loginTemplate(){
 return html`
 `}

 export function loginView(){
    render(loginTemplate(), root);
 }