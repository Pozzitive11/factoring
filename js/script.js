// BURGER MENU
const menuBtn = document.querySelector(".burger");
const menu = document.querySelector(".nav__list");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("show");
  menu.classList.toggle("show");
});

// NAVIGATION
const title = document.querySelector("title");
const currentPath = window.location.pathname;
const navItems = document.querySelectorAll(".nav__item");
const currentPathWithoutExtension = currentPath.replace(/\.html$/, "");

const pageTitleMap = {
  "/index": "ТОВ «КАМПСІС ЛІГАЛ»",
  "/about-company": "Про компанію",
  "/contacts": "Контакти",
  "/documents": "Документи",
  "/loani": "КТІК (Лоані)",
  "/ukr-kredit-finance": "УКР КРЕДИТ ФІНАНС",
  "/kachay-groshi": "Качай гроші",
  "/avans-kredit": "Аванс кредит",
};

navItems.forEach(function (item) {
  const link = item.querySelector(".nav__link");
  link.classList.remove("active");
  const href = link.getAttribute("href");
  const hrefWithoutExtension = href.replace(/\.html$/, "");

  if (currentPathWithoutExtension === hrefWithoutExtension) {
    link.classList.add("active");

    const pageTitle = pageTitleMap[currentPathWithoutExtension] || "";
    title.textContent = pageTitle;
  }
});

// ACCORDIONS
var acc = document.getElementsByClassName("documents__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("documents__accordion--active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
