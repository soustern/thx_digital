document.addEventListener("DOMContentLoaded", strategy());

function strategy() {
  console.log("foi");

  const card = document.getElementById("strategy");
  const modal = document.getElementById("modal_strategy");

  card.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
