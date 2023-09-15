import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = ` 
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  return galleryItem;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
galleryList.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
