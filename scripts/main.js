function hoverOnUserDP(img) {
    img.setAttribute("src", "images/menu-small-hover.png")
}

function hoverOffUserDP(img) {
    img.setAttribute("src", "images/menu-small.png")
}

let searchBar = document.getElementById("search-bar")
let activeSearch = document.getElementById("active-search")
let isActive = false;
let eraseSearch = document.getElementById("erase-search")
let searchInput = document.getElementById("search-input")

searchBar.onclick = function() {
    searchInput.focus()
}

searchInput.oninput = function() {
    activeSearch.style.display = "flex"
}

eraseSearch.onclick = function() {
    activeSearch.style.display = "none"
    searchInput.value = ""
}
