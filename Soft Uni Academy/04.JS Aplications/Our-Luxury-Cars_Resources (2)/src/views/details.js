import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deletecarById,
  getcarById,
  getTotalLikes,
  like,
  didUserLiked
} from "../api/data.js";

const detailsTamplate = (
  car,
  isOwner,
  onDelete,
  isLoggedIn,
  totalLikesCount,
  onClickLike,
  didUserLikeded
) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${car.imageUrl}" alt="example1" />
            <p id="details-category">${car.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${car.description}</p>
                <p id ="more-info">${car.moreInfo}</p>
              </div>
              <h3>Likes:<span id="likes">${totalLikesCount}</span></h3>
              <div id="action-buttons">
      ${isOwner
        ? html`<a href="/edit/${car._id}" id="edit-btn">Edit</a>
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
  const carId = ctx.params.id;
  const car = await getcarById(carId);
  const user = ctx.user;

  let userId;
  let totalLikesCount;
  let didUserLikeded;

  if (user != null) {
    userId = user._id;
    didUserLikeded = await didUserLiked(carId, userId);
  }

  const isOwner = user && car._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalLikesCount = await getTotalLikes(carId);
  ctx.render(
    detailsTamplate(
      car,
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
       carId: carId,
    };
    await like(likes);

    totalLikesCount = await getTotalLikes(carId);
    didUserLikeded = await didUserLiked(carId, userId);
    ctx.render(
      detailsTamplate(
        car,
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
      await deletecarById(carId);
      ctx.page.redirect("/dashboard");
    }
  }
}




<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="./images/pagani.jpg" alt="example1" />
  <p id="details-title">Pagani Huayra</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="price">Price: €1,010,310</p>
      <p class="weight">Weight: 1350 kg</p>
      <p class="top-speed">Top Speed: 360 kph</p>
      <p id="car-description">
        The Pagani Huayra is a breathtaking hypercar that seamlessly
        blends art and engineering, representing the epitome of
        automotive craftsmanship. Its striking exterior features
        aerodynamic curves and gull-wing doors, showcasing a design
        that's both futuristic and elegant. Underneath the hood, a
        meticulously crafted AMG-sourced V12 engine delivers an
        exhilarating performance, propelling the Huayra to astounding
        speeds, while the opulent interior envelops the driver in a
        cocoon of luxury, making every journey a symphony of power and
        refinement.</p>
    </div>