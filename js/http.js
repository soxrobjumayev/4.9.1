const API_KEY ="63f827b9"

 function getMovies(SearchString){
    return fetch (` https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${SearchString}`)
        .then(response => response.json())
   
}   

// async function getMovies(title){
//     const respoonse = await fetch (` https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`)
    
//     const result = await respoonse.json()

//     if(!result)return console.error("Error",result)
//     return result
// }   