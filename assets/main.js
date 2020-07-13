
function smallMenuButton() {
  var menu = document.getElementById("small-menu");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open")
  }

}

function modalControl(modalId) {
  let modal = document.getElementById(modalId)
  let body = modal.getElementsByClassName("modal-body")[0]
  let content = modal.getElementsByClassName("modal-content")[0]

  if (modal.classList.contains("open")) {
    content.classList.remove("open")
    document.body.classList.remove("no-overflow")
    setTimeout(() => {
      modal.classList.remove("open")
      body.classList.remove("no-overflow")
    }, 150)
  } else {
    document.body.classList.add("no-overflow")
    modal.classList.add("open")
    setTimeout(() => {
      body.classList.add("show");
      content.classList.add("open")
    }, 100)
  }
}