import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        data-source="${original}" 
        alt="${description}" />
      </a>
    </li>
  `;
  return galleryItem;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
galleryList.innerHTML = galleryMarkup;
galleryList.addEventListener("click", galleryItemClick);

function galleryItemClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  const source = target.dataset.source;
  openModal(source);
}

function openModal(source) {
  const instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">`,
    {
      onClose: () => {
        window.removeEventListener("keydown", keyPress);
      },
    }
  );
  instance.show();
  const keyPress = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  window.addEventListener("keydown", keyPress);
}
