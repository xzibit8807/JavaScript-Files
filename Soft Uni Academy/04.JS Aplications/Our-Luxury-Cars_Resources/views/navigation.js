import { render, html } from "../node_modules/lit-html/lit-html.js"
import { handleLogin, logout } from "../services/auth.js";

const header = document.querySelector("header");

export const loggedInTemplate = () => {
  return html`
    <!-- Logged-in users -->
    <div class="user">
      <a href="/create">Add Your Car</a>
      <a href="/logout" @click=${logout}>Logout</a>
    </div>
  `;
}

export const guestTemplate = () => {
  return html`
    <!-- Guest users -->
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  `;
}

export const navbarTemplate = (isAuthenticated) => {
  return html`
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
    <nav>
      <div>
        <a href="/dashboard">Our Cars</a>
        <a href="/search">Search</a>
      </div>
      ${isAuthenticated ? loggedInTemplate() : guestTemplate()}
    </nav>
  `;
};

export function navbarView(_ctx, next) {
  const isAuthenticated = _ctx.authData;
  render(navbarTemplate(isAuthenticated), header);
  next();
}
