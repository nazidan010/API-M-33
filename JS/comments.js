const loadComments=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error('error happend', error)
    )
}


//Vest way 
const loadComments2=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data=await res.json();
    console.log(data);
}