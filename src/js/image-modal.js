const modal = document.getElementById("image-modal");
if (modal && screen.width > 700) {
  const modalImg = document.getElementById("image-modal-content");
  const captionText = document.getElementById("image-modal-caption");

  document.querySelectorAll(".image--expandable").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (modalImg && captionText) {
        const fullSizeImage =
          event.target.parentNode.dataset.fullSizeImage || event.target.src;

        const src = fullSizeImage.replace("./img", "/img");
        modal.style.display = "block";
        modalImg.src = src;
        modalImg.alt = event.target.alt;
        captionText.innerHTML = event.target.alt;
      }
    });
  });

  modal.onclick = function () {
    modal.style.display = "none";
  };

  document.onkeydown = function (evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      modal.style.display = "none";
    }
  };
}
