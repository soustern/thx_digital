document.addEventListener(
  "DOMContentLoaded",
  strategy(),
  media(),
  creative(),
  innovation()
);

function strategy() {
  // Get correct modern card
  const card = document.getElementById("strategy");

  // Get correct modal
  const modal = document.getElementById("modal_strategy");

  // Get correct modal content
  const modal_content = document.getElementById("content_strategy");

  // Get correct modal close button
  const close = document.getElementById("close_strategy");

  // Make modal appear and apply animations+
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modal.style.animation = "fadeIn .3s";

    modal_content.style.animation = "downToUp .5s";
  });

  // Make modal disappear
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function media() {
  // Get correct modern card
  const card = document.getElementById("media");

  // Get correct modal
  const modal = document.getElementById("modal_media");

  // Get correct modal content
  const modal_content = document.getElementById("content_media");

  // Get correct modal close button
  const close = document.getElementById("close_media");

  // Make modal appear and apply animations+
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modal.style.animation = "fadeIn .3s";

    modal_content.style.animation = "downToUp .5s";
  });

  // Make modal disappear
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function creative() {
  // Get correct modern card
  const card = document.getElementById("creative");

  // Get correct modal
  const modal = document.getElementById("modal_creative");

  // Get correct modal content
  const modal_content = document.getElementById("content_creative");

  // Get correct modal close button
  const close = document.getElementById("close_creative");

  // Make modal appear and apply animations+
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modal.style.animation = "fadeIn .3s";

    modal_content.style.animation = "downToUp .5s";
  });

  // Make modal disappear
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function innovation() {
  // Get correct modern card
  const card = document.getElementById("inovation");

  // Get correct modal
  const modal = document.getElementById("modal_inovation");

  // Get correct modal content
  const modal_content = document.getElementById("content_inovation");

  // Get correct modal close button
  const close = document.getElementById("close_inovation");

  // Make modal appear and apply animations+
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modal.style.animation = "fadeIn .3s";

    modal_content.style.animation = "downToUp .5s";
  });

  // Make modal disappear
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
