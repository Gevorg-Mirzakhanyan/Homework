const circle = document.querySelectorAll('.circle');
const body = document.querySelector('body');

circle.forEach(function(el) {
  el.addEventListener("click", function (el) {
      el.target.id  === "grey" && (body.style.backgroundColor = el.target.id);
      el.target.id === "blue" && (body.style.backgroundColor = el.target.id);
      el.target.id === "yellow" && (body.style.backgroundColor = el.target.id);
      el.target.id === "white" && (body.style.backgroundColor = el.target.id)
  })
})


