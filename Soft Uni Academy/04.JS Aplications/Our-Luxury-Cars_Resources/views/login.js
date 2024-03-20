import {render, html} from "../node_modules/lit-html/lit-html.js";
import { handleLogin } from "./../services/auth.js";


const root = document.querySelector("main");
function loginTemplate(onSubmit){
 return html`
             <!-- Login Page (Only for Guest users) -->
             <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${handleLogin}  >
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>  
            </form>
          </div>
        </section>
 `}

 export function loginView(){
    render(loginTemplate(), root);
 }

 
async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!password || !email) {
    return alert("All fields are required!");
  }

  await login(email, password);
  event.target.reset();
  ctx.setUserNav();
  ctx.page.redirect("/");
}

