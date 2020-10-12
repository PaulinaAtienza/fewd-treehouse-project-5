baguetteBox.run('.gallery');

const searchBar = document.getElementById("search");
let gallery = document.querySelectorAll(".gallery a");
searchBar.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  for (let i = 0; i < gallery.length; i++) {
    const searchInput = gallery[i].getAttribute("data-caption");
  if (searchInput.toLowerCase().includes(searchTerm)) {
    gallery[i].style.display = "";
  } else {
    gallery[i].style.display = "none";
  }
}
});