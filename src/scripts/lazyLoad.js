const images = document.querySelectorAll("img");
if (images) {
  images.forEach(img => img.setAttribute("loading", "lazy"));
}