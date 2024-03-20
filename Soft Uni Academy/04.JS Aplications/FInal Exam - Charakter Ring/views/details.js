import {render, html} from "../node_modules/lit-html/lit-html.js";
//import { handleLogin } from "../src/services/auth.js";

const root = document.querySelector("main");
function detailsTemplate(){
 return html`
        <!-- Details page -->
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="./images/hero 1.png" alt="example1" />
            <div>
            <p id="details-category">Hero</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                  Choosing the Hero means you'll be focusing on 
                all-out strength with this Elden Ring class. Serving as the opposite
                 to the Warrior class, Hero players will use heavier weapons with slow
                  attacks that deal massive damage.
                  </p>
                   <p id ="more-info">
                    Elden Ring Heroes start off with good Vigor
                     and Endurance, so more HP and Stamina,
                      meaning they're at least a little tanky
                       and agile too. You can boost these Attributes
                        more in the early levels to make the Hero more
                         balanced or can focus purely on Strength to up
                          your damage as much as you can.
                        </p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">0</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a>

             <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="like-btn">Like</a>

          </div>
            </div>
        </div>
      </section>
 `}

 export function detailsView(){
    render(detailsTemplate(), root);
 }