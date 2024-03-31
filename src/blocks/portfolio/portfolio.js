const portfolio = document.querySelector(".portfolio");

if (portfolio) {

  const portfolioTabs = portfolio.querySelectorAll(".portfolio__tab");
  const portfolioLists = portfolio.querySelectorAll(".portfolio__list");

  portfolioTabs.forEach((portfolioTab, index) => {
    portfolioTab.addEventListener("click", () => {
      portfolioTabs.forEach(portfolioTab => portfolioTab.classList.remove("is-active"));
      portfolioTab.classList.add("is-active");

      portfolioLists.forEach(portfolioList => portfolioList.classList.add("hidden"));
      portfolioLists[index].classList.remove("hidden");

    })
  })

}