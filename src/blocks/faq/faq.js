  const faq = document.getElementById("faq");

if (faq) {
  const accordionItems = faq.querySelectorAll('.faq__item'); // список элементов аккордиона
  const toggleClass = (item) => item.classList.toggle('js-faq-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', () => toggleClass(accordionItem));
  });
}



