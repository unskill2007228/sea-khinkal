/*=============== CARD POPUP JS ===============*/

const modal = document.querySelectorAll('.modal');
const cardBtn = document.querySelectorAll('.card__product');
const modalClose = document.querySelectorAll('.modal__close');
const modalCard = document.querySelectorAll('.modal__card');

if (modal.length && cardBtn.length) {
  let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal');
  };

  // Show modal
  cardBtn.forEach((cardBtnItem, i) => {
    cardBtnItem.addEventListener('click', () => {
      activeModal(i);
    });
  });

  // Close modal
  modalClose.forEach((modalCloseItem) => {
    modalCloseItem.addEventListener('click', () => {
      modal.forEach((modalRemove) => {
        modalRemove.classList.remove('active-modal');
      });
    });
  });

  // Hide modal on background click
  modal.forEach((modalItem) => {
    modalItem.addEventListener('click', () => {
      modalItem.classList.remove('active-modal');
    });
  });

  modalCard.forEach((modalCardItem) => {
    modalCardItem.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}


/*=============== MENU ===============*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (menuBtnIcon) {
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
      );
    }
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");

    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
}


/*=============== SCROLL REVEAL ===============*/

if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 750,
  });

  ScrollReveal().reveal(".header__form form", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  // ScrollReveal().reveal(".choose__image img", {
  //   ...scrollRevealOption,
  //   origin: "left",
  // });

  ScrollReveal().reveal(".choose__content .section__header", {
    ...scrollRevealOption,
    delay: 250,
  });

  ScrollReveal().reveal(".choose__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".choose__card", {
    duration: 1000,
    delay: 750,
    interval: 500,
  });

  ScrollReveal().reveal(".subscribe__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".subscribe__content .section__header", {
    ...scrollRevealOption,
    delay: 250,
  });

  ScrollReveal().reveal(".subscribe__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".subscribe__content form", {
    ...scrollRevealOption,
    delay: 750,
  });
}


/*=============== TABS ===============*/

const tabs = document.querySelector(".deals__tabs");

if (tabs) {
  tabs.addEventListener("click", (e) => {
    const tabContents = document.querySelectorAll(
      ".deals__container .tab__content"
    );

    Array.from(tabs.children).forEach((item) => {
      item.classList.toggle("active", item.dataset.id === e.target.dataset.id);
    });

    tabContents.forEach((item) => {
      item.classList.toggle("active", item.id === e.target.dataset.id);
    });
  });
}


/*=============== SWIPER ===============*/


if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });
}


/*=============== DROPDOWN ===============*/

const dropdown = document.getElementById('dropdown');
const btn = document.getElementById('dropdownBtn');
const items = document.querySelectorAll('.dropdown-element');

if (dropdown && btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent;
      dropdown.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}