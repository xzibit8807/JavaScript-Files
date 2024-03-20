import { render, html } from "../node_modules/lit-html/lit-html.js"


const root = document.querySelector("main");
function homeTemplate() {
    return html`

 `}

export function homeView() {
    render(homeTemplate(), root);
}