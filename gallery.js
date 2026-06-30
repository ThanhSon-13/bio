document.querySelectorAll("img[data-slot]").forEach((img) => {
  img.addEventListener("error", () => {
    const card = img.closest(".photo-card");
    if (card) card.classList.add("missing");
  });

  if (img.complete && img.naturalWidth === 0) {
    const card = img.closest(".photo-card");
    if (card) card.classList.add("missing");
  }
});

const input = document.getElementById("localPreviewInput");
const previewGrid = document.getElementById("previewGrid");

if (input && previewGrid) {
  input.addEventListener("change", () => {
    previewGrid.innerHTML = "";

    [...input.files].forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const url = URL.createObjectURL(file);
      const card = document.createElement("a");
      card.className = "photo-card";
      card.href = url;
      card.target = "_blank";

      const img = document.createElement("img");
      img.src = url;
      img.alt = file.name;

      card.appendChild(img);
      previewGrid.appendChild(card);
    });
  });
}
