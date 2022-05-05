(function () {
  let current = location.pathname.split("/")[1];
  if (current === "") return;
  let navLinks = document.querySelectorAll(".navLinks a");
  navLinks.forEach((nav) => {
    if (nav.getAttribute("href").substring(2).indexOf(current) !== -1) {
      //   Active Nav Classs
      nav.className += " underline";
    }
  });
})();
