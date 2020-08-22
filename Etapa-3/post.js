
// POST
let titulo = document.querySelector("#titulo");
let paragrafo = document.querySelector("#paragrafo");
let form  = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ }),
  })
  .then(res => res.json())
  .then(res => console.log(res))
})