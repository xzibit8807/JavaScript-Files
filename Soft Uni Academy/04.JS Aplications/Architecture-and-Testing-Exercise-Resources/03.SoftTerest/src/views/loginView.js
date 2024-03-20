import {login} from "../api/user"

const login = document.getElementById("loginView");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

let context = null;
export function showLogin(ctx){
    context = ctx;
    context.renderer(login);
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);
    if(!email || !password){
        return alert("Error");
    }
    
    await login(email, password);
    context.goTo("/");
}