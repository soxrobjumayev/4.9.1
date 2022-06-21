  
  getMovies("kurtlar vadisi").then((result) => {
    renderMovies(result.Search)
    // console.log(result.Search)
})
// .catch(err => console.log(err))



var moviesRow = document.querySelector(".movies")


function rednderLoader(){
  let loaderTemplate = document.querySelector("#loader")
  moviesRow.innerHTML = null

  let loaderEl = loaderTemplate.content.cloneNode(true)
  moviesRow.appendChild(loaderEl)
}
rednderLoader()

function renderMovies(movies){
  moviesRow.innerHTML = null
  let fragment = new DocumentFragment()
  movies.forEach(movie => {
    fragment.appendChild(createMovieEl(movie))
  })
  moviesRow.appendChild(fragment)
}

function createMovieEl(movie){
  console.log(movie)
  let movieTemplate = document.querySelector("#movie-item")
  let movieEl = movieTemplate.content.cloneNode(true)

  let movieRR = movieEl.querySelector(".card-img-top")
  movieRR.src = movie.Poster
movieRR.addEventListener("error", () => {
  movieRR.src = "/img/23.jpg"
})
  
  let movieTitle = movieEl.querySelector(".movie-title")
  movieTitle.textContent = movie.Title

  let moviedec = movieEl.querySelector(".movie-description")
  moviedec.textContent = movie.Type

  let moviedec22 = movieEl.querySelector(".movie-description22")
  moviedec22.textContent = movie.Year
  
  let moviebtn= movieEl.querySelector(".btn-danger")

    moviebtn.addEventListener('click',() => {
    var drrlEl = document.createElement("p")
    drrlEl.className="p"
    drrlEl.textContent = "Zolimlardan olib mazlumlarga berish...Oxirini oylagan qahramon bololmaydi!!!"
    moviebtn.appendChild(drrlEl)
   
})
  
 

  
 return  movieEl
}