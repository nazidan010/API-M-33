function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => displayUser2(data))
}

// function displayUser2(data){
//     console.log(data);
// }

// function displayUser2(data){  
//     for(const user of data){  //singel singel object data
//         console.log(user.name);
//     }
// }

function displayUser2(data){
    const ul=document.getElementById('user-list');
    for(const user of data ){
        console.log(user.name);
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));