let menu = document.querySelector(".unorderedList");
function display(event) {
  event.preventDefault();
  document.querySelector(".menu").style.display = 'none';
  menu.style.display = 'block';
}
let click = document.querySelector(".clickMe");
click.addEventListener('click', display);