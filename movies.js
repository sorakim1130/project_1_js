const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJlMmYyMmU4MDhjZjViZmI4ZjhlZGQxZDdlNjY0ZSIsInN1YiI6IjY2MmU0ZmQyMzU4MTFkMDEyNWU4NWEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xE0-PNrm_KVxMpau2eA_2orlnztq7B8wtPTXnKyr-M",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    // API 응답에서 결과 값을 추출
    const results = data.results;

    const list = document.getElementById("movie-title");

    const container = document.getElementById("movie-container");
    container.innerHTML = results
      .map(
        (result) => `
      <div class="movie-card">
      <img
          src="https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
          alt="1"
        />
        <h3 class="movie-title">${result.title}</h3>
        <p>${result.overview}</p>
        <p>Rating: ${result.vote_average}</p>
      </div>
    `
      )
      .join("");
    const cards = document.querySelectorAll(".movie-card");
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        alert(`영화 아이디: ${results[index].id}`);
      });
    });
  })
  //   .then((response) => console.log(response))
  .catch((err) => console.error(err));
