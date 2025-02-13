const movies = [
    { title: "Patton Oswalt: Annihilation", rate: 7.4, year: 2017, duration: "1 hr 6 min", genre: "Uncategorized", image: "deadpool.jpg" },
    { title: "New York Doll", rate: 7.9, year: 2005, duration: "1 hr 15 min", genre: "Documentary Music", image: "deadpool.jpg" },
    { title: "Mickey’s Magical Christmas", rate: 6.8, year: 2001, duration: "1 hr 5 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "And Then I Go", rate: 7.6, year: 2017, duration: "1 hr 39 min", genre: "Drama", image: "deadpool.jpg" },
    { title: "An Extremely Goofy Movie", rate: 6.4, year: 2000, duration: "1 hr 19 min", genre: "Animation Comedy Family", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
    { title: "Peter Rabbit", rate: 6.6, year: 2008, duration: "1 hr 30 min", genre: "Adventure Animation Comedy", image: "deadpool.jpg" },
];

const movieList = document.getElementById("movies-list");
const searchInput = document.getElementById("movieSearch");
const searchButton = document.getElementById("searchButton");

function displayMovies(filteredMovies) {
    movieList.innerHTML = "";
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year} | ${movie.duration}</p>
            <p>${movie.genre}</p>
            <p>${movie.rate}</p>
            <button class="info-btn">More info</button>
        `;
        movieList.appendChild(movieCard);
    });
}

function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

searchButton.addEventListener("click", searchMovies);

displayMovies(movies);
