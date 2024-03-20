import { showCreate } from "./src/views/createView.js";
import { showDashboard } from "./src/views/dashboardVIew.js";
import { showHome } from "./src/views/homeViews.js";
import { showLogin } from "./src/views/loginView.js";
import { showRegister } from "./src/views/registerView.js";

import page from "./node_modules/page.mjs";

document.getElementById("section").remove();

document.querySelector("nav").addEventListener("click", onNavigate);

page(`/`, index);
const routs = {
    "/": showHome,
    "/dashboard": showDashboard,
    "/create": showCreate,
    "/login": showLogin,
    "/register": showRegister,
    "/logout": () => {  }
}
const ctx ={
    renderer,
    goTo
}

function renderer(section){
    MediaDeviceInfo.replaceChildren(section);
}



function onNavigate(e) {
    e.preventDefault();
    if (e.target.tagName !== "A" && e.target.tagName !== "IMG") {
        return;
    }
    let target = e.target;

    if (target.tagName === "IMG") {
        target = target.parentElement
    }

    const viewName = new URL(target.href).pathname;
    goTo(viewName);
}

function goTo(name, ...params){
    const handler = routs[name];
    handler(ctx);
}

//function renderer(e) {

//}
