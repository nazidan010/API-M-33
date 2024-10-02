function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}

/**
 * 1.get the container element where you went to add the new elements
 * 2.create child element 
 * 3.set innerText or innerHtml
 * 4.AppendChild
 */

function displayPosts(posts){
    const postContainer=document.getElementById('posts-container');
    for(const post of posts){
        console.log(post);
        const postDiv=document.createElement('div');
        postDiv.classList.add('post') //css style add
        postDiv.innerHTML=`
        <h4>User-${post.userId}</h4>
        <h5>Post: title-${post.title}</h5>
        <p>Post Description-${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();
