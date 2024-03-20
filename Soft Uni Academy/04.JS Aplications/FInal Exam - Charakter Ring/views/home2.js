import { render, html } from "../node_modules/lit-html/lit-html.js"


export function homeView2() {
    return html`
      <div>
        ${renderNavigation()} 
  
        <section id="hero">
          <h1>Welcome to Elden Ring Explorer...</h1>
          <img id="hero-img" src="./images/hero.png" alt="hero">
        </section>
        
        <!-- Останалата част на homeView -->
      </div>
    `;
  }
  
  function renderNavigation() {

    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
        ${isLoggedIn() ? renderLoggedInLinks() : renderGuestLinks()}
      </nav>
    `;
  }
  
  function renderLoggedInLinks() {

    return html`
      <div class="user">
        <a href="/addCharacters">Add Character</a>
        <a href="/logout">Logout</a>
      </div>
    `;
  }
  
  function renderGuestLinks() {

    return html`
      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>        
      </div>
    `;
  }
  