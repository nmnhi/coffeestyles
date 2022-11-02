const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

toggleTopMenuIcon.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // click to toggle top menu icon
    topMenu.classList.toggle("ct-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    // click outside form toggle top menu icon
    if (topMenu.classList.contains("ct-top-menu-expanded")) {
      // topMenu.classList.remove("ct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
