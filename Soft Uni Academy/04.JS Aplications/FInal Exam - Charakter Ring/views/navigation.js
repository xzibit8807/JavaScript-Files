import { render, html } from "../node_modules/lit-html/lit-html.js"


const header = document.querySelector("header");

export const loggedInTemplate = () => {
  return html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="/characters">Add Character</a>
            <a href="/logout">Logout</a>
          </div>
 `
}

export const guestTemplate = () => {
  return html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>        
          </div>
    `
}



export const navbarTemplate = (isAuthenticated) => {
  return html`
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>
      <nav>
        <div>
          <a href="/characters">Characters</a>
        </div>

        <!-- Include other navigation items based on your requirements -->

        ${isAuthenticated ? loggedInTemplate() : guestTemplate()}
      </nav>
  `;
};

export function navbarView(ctx, next) {
  const isAuthenticated = ctx.authData;
  render(navbarTemplate(isAuthenticated), header);
  next();
}