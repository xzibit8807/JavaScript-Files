import {render, html} from "../node_modules/lit-html/lit-html.js";
//import { handleLogin } from "../services/auth.js";

const root = document.querySelector("main");
function charactersTemplate(){
 return html`
        <!-- Dashboard page -->
        <h2>Characters</h2>
        <section id="characters">
          <!-- Display a div with information about every post (if any)-->
          <div class="character">
            <img src="./images/hero 1.png" alt="example1" />
            <div class="hero-info">
              <h3 class="category">Hero</h3>
              <p class="description">Choosing the Hero means you'll be focusing on 
                all-out strength with this Elden Ring class. Serving as the opposite
                 to the Warrior class, Hero players will use heavier weapons with slow
                  attacks that deal massive damage.</p>
              <a class="details-btn" href="#">More Info</a>
            </div>
            
          </div>
          <div class="character">
            <img src="./images/hero 2.png" alt="example2" />
            <div class="hero-info">
              <h3 class="category">Astrologer</h3>
              <p class="description">The Elden Ring Astrologer class is one of the few options
                 built for magic from the start, with an impressive 15 Mind and 16 Intelligence
                  stats.Astrologers will be able to cast many powerful Sorcery spells for single and 
                  multiple targets.
                </p>
              <a class="details-btn" href="">More Info</a>
            </div>
            
          </div><div class="character">
            <img src="./images/hero 3.png" alt="example3" />
            <div class="hero-info">
              <h3 class="category">Bandit</h3>
              <p class="description">The Bandit class is Elden Ring's
                 stealth assassin. With a dagger and a small shield,
                  Bandit players need to avoid direct conflict with 
                  groups of enemies and should instead focus on critical
                   hits with backstabs or sniping with the starting Short Bow.</p>
              <a class="details-btn" href="#">More Info</a>
            </div>
           
          </div>
          
        </section>
         <!-- Display an h2 if there are no posts -->
         <h2>No added Heroes yet.</h2>
 `}

 export function charactersView(){
    render(charactersTemplate(), root);
 }