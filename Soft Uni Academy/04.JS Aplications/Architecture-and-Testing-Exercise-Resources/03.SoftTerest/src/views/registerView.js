import { register } from "../api/user";
import { register } from "../api/user";
import { showHome } from "./homeViews";
const registerView = document.getElementById("registerVIew");
const form = document.querySelector("form")
form.addEventListener("submit", onSubmit);
let context = null;

export function showRegister(ctx){
    context = ctx
    context.renderer(registerView);
}

async function onSubmit(e){
    e.preventDefault;
 const formData = new FormData(e.target)
    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(email.length < 3 || password.length < 3 || password !== repeatPassword){
        return alert("error")
    }

    await register(email,password)
    form.reset();
    context.goTo("/")
    
}
