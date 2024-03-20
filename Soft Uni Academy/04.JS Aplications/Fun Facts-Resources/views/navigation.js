import { render, html } from "../node_modules/lit-html/lit-html.js"
import { logout } from "../services/auth.js";

const header = document.querySelector("header");

export const loggedInTemplate = () => {
  return html`
        <!-- Logged-in users -->
        <div class="user">
          <a href="/add">Add Fact</a>
          <a href="/logout" @submit=${logout}>Logout</a>
        </div>
 `
}

export const guestTemplate = () => {
  return html`
        <!-- Guest users -->
        <div class="guest">
          <a href="/login" @submit=${loggedInTemplate}>Login</a>
          <a href="/register">Register</a> 
        </div>
    `
}

Object.

export const navbarTemplate = (isAuthenticated) => {
  return html`
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Fun Facts</a>
        </div>
        ${isAuthenticated ? loggedInTemplate() : guestTemplate()}
      </nav>
  `;
};

export function navbarView(ctx, next) {
  const isAuthenticated = ctx.authData;
  render(navbarTemplate(isAuthenticated), header);
  next();
}