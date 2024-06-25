const brief = document.getElementById("brief");

if (brief) {

  const openBriefBtns = document.querySelectorAll(".js-brief-open");

  console.log(openBriefBtns)

  openBriefBtns.forEach(openBriefBtn => {
    openBriefBtn.addEventListener("click", () => {
      brief.classList.add("js-visible");
      blockScrollBody();
    })
  })



  const closeBriefBtn = brief.querySelector(".brief__back");

  closeBriefBtn.addEventListener("click", () => {
    brief.classList.remove("js-visible");
    unblockScrollBody();
  });



}