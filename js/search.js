const searchBar = document.getElementById("search");
let photoGallery = document.querySelectorAll(".gallery a");
searchBar.addEventListener("keyup", function(e) {
  const searchTerm = e.target.value.toLowerCase();
  for (let i = 0; i < photoGallery.length; i++) {
    const searchInput = photoGallery[i].getAttribute("data-caption");
  if (searchInput.toLowerCase().includes(searchTerm)) {
    photoGallery[i].style.display = "";
  } else {
    photoGallery[i].style.display = "none";
  }
}
});