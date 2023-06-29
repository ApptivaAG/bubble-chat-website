window.onscroll = function () {
  toggleSticky();
};

window.onload = function () {
  toggleSticky();
};

function toggleSticky() {
  const navigation = document.getElementById("navigation");
  if (navigation) {
    const stickyOffset = navigation.offsetTop + 50;

    if (window.pageYOffset > stickyOffset) {
      navigation.classList.add("menu--sticky");
    } else {
      navigation.classList.remove("menu--sticky");
    }
  }
}

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("focus", disableBodyScroll, true);
menuButton.addEventListener("blur", enableBodyScroll, true);

let scrollY;

function disableBodyScroll() {
  scrollY = window.scrollY;
  bodyScrollLock.disableBodyScroll(document.body);
}

function enableBodyScroll() {
  bodyScrollLock.enableBodyScroll(document.body);
  window.scrollTo(0, parseInt(scrollY || "0"));
}

document.getElementById("menu-close").onclick = function (eve) {
  document.activeElement.blur();
  document.getElementById("menu-items").style.transform =
    "translate3d(100vw, 0px, 0px)";
  var dropdowns = document.querySelectorAll("[id*=menu-list-item-]");
  dropdowns.forEach((d) => (d.checked = false));
  eve.stopImmediatePropagation();
};

document.getElementById("menu-button").onclick = function (eve) {
  document.getElementById("menu-items").style.transform =
    "translate3d(-100vw, 0px, 0px)";
  eve.stopImmediatePropagation();
};
