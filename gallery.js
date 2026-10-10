function upDate(previewPic) {
  const displayBox = document.getElementById("image");
  const imgElement = previewPic.querySelector("img");

  displayBox.textContent = imgElement.alt;
  displayBox.style.backgroundImage = `url('${imgElement.src}')`;
}

function unDo() {
  const displayBox = document.getElementById("image");

  displayBox.textContent = "Hover over or tab into an image below to display here.";
  displayBox.style.backgroundImage = "none";
}

function initializeGallery() {
  console.log("Gallery initialized: onload event has fired successfully.");

  const previews = document.querySelectorAll(".preview");

  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
  }
}
