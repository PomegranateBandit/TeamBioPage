function setupTabs () {
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActvate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

      sideBar.querySelectorAll(".tabs__button").forEach(button => {
        button.classList.remove("tabs__button--active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach(tab=> {
        tab.classList.remove("tabs__button--active");
      });

        button.classList.add("tabs__button--active");
        tabToActvate.classList.add("tabs__content--active");
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
	setupTabs();

  document.querySelectorAll(".tabs").forEach(tabsContainer => {
    tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
  });
});
