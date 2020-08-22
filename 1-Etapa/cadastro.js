let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form  = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {
    name: name.value,
    job: job.value
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(function(response){
      console.log(response);
  });
//   .then(res => res.json())
//   .then(res => console.log(res));
})