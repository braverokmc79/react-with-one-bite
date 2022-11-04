let response = fetch("https://jsonplaceholder.typicode.com/posts");

response
    .then((data) => {
        console.log("data : ", data);
        return data.json();
    })
    .then((res) => {
        console.log("res 1:", res);
    });

async function getdata() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonData = await data.json();
    console.log(jsonData);
}

getdata();