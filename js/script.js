document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a.nav__link');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      loadPage(href);
      history.pushState(null, '', href);
    });
  });

  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname);
  });

  function loadPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.querySelector('main').innerHTML = html;
      })
      .catch(err => console.error('Error loading page:', err));
  }

  // Initial load
  loadPage(window.location.pathname);
  // BURGER MENU
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".nav__list");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("show");
    menu.classList.toggle("show");
  });
  // NAVIGATION

  const title = document.querySelector("title");
  const currentPath = window.location.pathname.replace(/\.html$/, "");
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

  title.textContent = pageTitleMap[currentPath] || title.textContent;

  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = link.getAttribute("href").replace(/\.html$/, "");
    if (currentPath === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  // ACCORDIONS
  const accordionButtons = document.querySelectorAll(".documents__accordion");

  accordionButtons.forEach((accordion) => {
    accordion.addEventListener("click", function ()  {
      this.classList.toggle("documents__accordion--active");
      console.log(this.nextElementSibling);
      const documentsList = this.nextElementSibling;
      documentsList.classList.toggle("documents__list--active");
    });
  });
});
