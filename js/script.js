document.addEventListener("DOMContentLoaded", () => {
  // BURGER MENU
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".nav__list");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("show");
    menu.classList.toggle("show");
  });
  // NAVIGATION

  const currentPath = window.location.pathname
    .replace(/\.html$/, "")
    .replace(/^\//, "");

  const title = document.querySelector("title");
  const pageTitleMap = {
    index: "ТОВ «КАМПСІС ЛІГАЛ»",
    "about-company": "",
    contacts: "",
    documents: "",
    loani: "",
    "ukr-kredit-finance": "",
    "kachay-groshi": "",
    "avans-kredit": "",
  };

  title.textContent = pageTitleMap[currentPath] || title.textContent;

  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = link
      .getAttribute("href")
      .replace(/\.html$/, "")
      .replace(/^\//, "");
    if (currentPath === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ACCORDIONS
  const accordionButtons = document.querySelectorAll(".documents__accordion");

  accordionButtons.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("documents__accordion--active");
      const documentsList = this.nextElementSibling;
      documentsList.classList.toggle("documents__list--active");
    });
  });

});
