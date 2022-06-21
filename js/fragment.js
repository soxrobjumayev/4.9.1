// var albumsListEl = document.querySelector(".album-list")

// function renderAlbum(posts){
//     let fragment = new DocumentFragment()
//     posts.forEach((post) =>{
//         let liEl = document.createElement("li")
//         liEl.textContent = `ID::${post.id}  |TITLE:: ${post.title} |"BODY::${post.body}`
//         // liEl.textContent = '${album.id} | ${album.title}'

     
       
//         fragment.appendChild(liEl)

//     })

//     albumsListEl.innerHTML =null
//     albumsListEl.appendChild(fragment)
// }

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(respose => respose.json())
//     .then(
//         result => {
//             renderAlbum(result)
//             console.log(result)
//         },
//         error =>{
//             console.log(error)
//         }
//     )