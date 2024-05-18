let inputElement = document.querySelectorAll("input");

inputElement.forEach((e) => {
  e.addEventListener("input", (event) => {
    let parentElem = e.parentElement;
    let labelElem = parentElem.querySelector("label");
    if (!event.target.value.trim() == "") {
      labelElem.classList.add("focus");
    } else {
      labelElem.classList.remove("focus");
    }
  });
});

$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
  },
});
const getTopScroll = () => {
  let scrolltop = window.scrollY;
  let goupButton = document.querySelector(".goup");
  if (scrolltop < 200) {
    goupButton.classList.add("d-none");
    goupButton.classList.remove("d-flex");
  } else {
    goupButton.classList.remove("d-none");
    goupButton.classList.add("d-flex");
  }

  //fixed menu
  let bodyElem = document.querySelector("body");
  if (scrolltop < 50) {
    bodyElem.classList.remove("scroll");
  } else {
    bodyElem.classList.add("scroll");
  }
};

document.addEventListener("scroll", getTopScroll);

let menuIcon = document.querySelector(".menu-icon-mobile");

menuIcon.addEventListener("click", () => {
  let iconParent = menuIcon.parentElement;
  let mainMenu = iconParent.querySelector("ul");
  console.log(mainMenu);
  mainMenu.classList.toggle("show");
});

window.addEventListener("resize", () => {
  let mainMenu = document.querySelector('.container>nav>ul');
  if (window.innerWidth > 768) {
    if (mainMenu) {
      mainMenu.classList.remove('show');
    }
  }
});
