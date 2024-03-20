import { render, html } from "../node_modules/lit-html/lit-html.js"
import { handleRegister } from "./../services/auth.js";


const root = document.querySelector("main");
export function registerTemplate() {
    return html`
        <!-- Register Page (Only for Guest users) -->
        <section id="register">
          
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form class="register-form" @submit=${handleRegister}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
         
        </section>
 `}

export function registerView() {
    render(registerTemplate(), root);
}