/* 
import { render, html, nothing, } from "../node_modules/lit-html/lit-html.js";


import { getAuthData } from "../services/auth.js";
import { handleBuy } from "../services/products.js";

const root = document.querySelector("main");


export function detailsTemplate(    
  product,
  authData,
  boughtCount,
  isAlreadyBought) {
  return html`
        <!-- Details page -->
        <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="./images/fact 1.png" alt="example1" />
          <p id="details-category">History</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">
                Uncover the intriguing tale of the shortest war in history!
                The Anglo-Zanzibar War of 1896 lasted a mere 38 minutes,
                making it an astonishingly brief conflict that's sure to
                leave you amazed by the brevity of battle.
              </p>
              <p id="more-info">
                The Anglo-Zanzibar War, which occurred on
                August 27, 1896, goes down in history as
                the shortest recorded war. It lasted a mere 38 minutes!
                The conflict erupted when Sultan Khalid bin Barghash of
                Zanzibar refused to step down after the death of his predecessor.
                British warships bombarded the palace, quickly overwhelming
                the sultan's forces and forcing his surrender. This incredible
                piece of history serves as a reminder of how swiftly events
                can unfold, leaving a lasting impact in the annals of time.
              </p>
            </div>

            <h3>Likes:<span id="likes">0</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              <a href="/edit" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="" id="like-btn">Like</a>

            </div>
          </div>
        </div>
      </section>
     `;
}

export function detailsView() {
  render(detailsTemplate(), root);

  // Get the like button and the likes counter after rendering
  const likeBtn = document.getElementById("like-btn");
  const likesCounter = document.getElementById("likes");

  let counter = 0;

  function handleLikeClick() {
    counter++;
    likesCounter.textContent = counter;

    // You can also send an API request to update the server with the like information
    // For example, call a like API endpoint
    // fetch("/api/like", {
    //     method: "POST",
    //     // Additional options as needed
    // });

    // Optional: Disable the like button after clicking
    likeBtn.disabled = true;
  }

  likeBtn.addEventListener("click", handleLikeClick);
}


//////////////////////////////---------------------------------------------------------------
*/

import { html } from "../node_modules/lit-html/lit-html.js";
import {
  deleteFactById,
  getFactById,
  getTotalLikes,
  like,
  didUserLiked
} from "../services/data.js";

const detailsTamplate = (
  fact,
  isOwner,
  onDelete,
  isLoggedIn,
  totalLikesCount,
  onClickLike,
  didUserLikeded
) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fact.imageUrl}" alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${fact.description}</p>
                <p id ="more-info">${fact.moreInfo}</p>
              </div>
              <h3>Likes:<span id="likes">${totalLikesCount}</span></h3>
              <div id="action-buttons">
      ${isOwner
        ? html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
              >Delete</a
            >`
        : ""}
     ${(() => {
  if (didUserLikeded == 0) {
    if (isLoggedIn && !isOwner) {
      return html` <a href="javascript:void(0)" @click=${onClickLike} id="like-btn">Like</a>`;
    }
    }
})()}
    </div>
            </div>
`;

export async function detailsPage(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);
  const user = ctx.user;

  let userId;
  let totalLikesCount;
  let didUserLikeded;

  if (user != null) {
    userId = user._id;
    didUserLikeded = await didUserLiked(factId, userId);
  }

  const isOwner = user && fact._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalLikesCount = await getTotalLikes(factId);
  ctx.render(
    detailsTamplate(
      fact,
      isOwner,
      onDelete,
      isLoggedIn,
      totalLikesCount,
      onClickLike,
      didUserLikeded
    )
  );

  async function onClickLike() {
    const likes = {
       factId: factId,
    };
    await like(likes);

    totalLikesCount = await getTotalLikes(factId);
    didUserLikeded = await didUserLiked(factId, userId);
    ctx.render(
      detailsTamplate(
        fact,
        isOwner,
        onDelete,
        isLoggedIn,
        totalLikesCount,
        onClickLike,
        didUserLiked
      )
    );
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteFactById(factId);
      ctx.page.redirect("/dashboard");
    }
  }
}
