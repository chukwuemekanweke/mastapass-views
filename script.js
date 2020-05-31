
function smallMenuButton() {
    var menu = document.getElementById("small-menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open")
    }

}