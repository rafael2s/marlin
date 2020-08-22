// GET
let more = document.querySelector("#more");
let list = document.querySelector("#list");

more.addEventListener("click", function() {
  fetch('https://reqres.in/api/users?page=2')
    .then(function (response){
        return location.href = "detalhes.html";
    })
    .then(function(response) {
      return response.json();
    })

    .then(function(response) {
      response.data.forEach(function(user) {  
        let item = document.createElement("li");
        item.classList.add("item");
        
        item.innerHTML = '<img src="'+user.avatar+'" /><span>'+user.first_name+'</span>';
        
        list.appendChild(item);
      })
    })
})
// POST
// let name = document.querySelector("#name");
// let job = document.querySelector("#job");
// let form  = document.querySelector("#form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let data = {
//     name: name.value,
//     job: job.value
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(data)
//   })
//   .then(res => res.json())
//   .then(res => console.log(res));
// })