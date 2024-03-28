
function hideLoader () {
  const loader = document.getElementById('loader');

  if (loader) {
    loader.classList.add('hide');
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
};

window.addEventListener('load', hideLoader);