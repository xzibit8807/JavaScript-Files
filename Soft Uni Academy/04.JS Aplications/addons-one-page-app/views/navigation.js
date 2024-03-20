import { render, html } from "../node_modules/lit-html/lit-html.js"


const header = document.querySelector("header");

export const loggedInTemplate = () => {
  return html`
          <!-- Logged-in users -->
 `
}

export const guestTemplate = () => {
  return html`
          <!-- Guest users -->
    `
}



export const navbarTemplate = (isAuthenticated) => {
  return html`
      <!-- Navigation -->

        <!-- Include other navigation items based on your requirements -->

       <!-- ${isAuthenticated ? loggedInTemplate() : guestTemplate()}  -->

  `;
};

export function navbarView(ctx, next) {
  const isAuthenticated = ctx.authData;
  render(navbarTemplate(isAuthenticated), header);
  next();
}