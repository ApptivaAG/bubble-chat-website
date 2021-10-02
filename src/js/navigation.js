window.onscroll = function () {
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
