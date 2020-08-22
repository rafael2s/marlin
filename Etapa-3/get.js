// GET


const req = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json();
    })
    .then(jsonBody => {
        document.querySelector("#list").innerHTML = jsonBody[0].title;
        console.log(jsonBody);
    })
    console.log(req)
    