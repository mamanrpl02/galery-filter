const filterContainer = document.querySelector(".galery-filter");
const galeryItems = document.querySelectorAll(".galery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");

    galeryItems.forEach((item) => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
