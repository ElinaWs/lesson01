const showFilmsBn = document.getElementById('show-film');
const addFilmsBn = document.getElementById('add-film-bt');
const findFilmsBn = document.getElementById('search-film-bt');
const markFilmsBn = document.getElementById('mark-film-bt');
const contentBlock = document.getElementById('content');

const movies = [
  { title: 'Inception', isAvailable: true },
  { title: 'The Dark Knight', isAvailable: true },
  { title: 'Avatar', isAvailable: false },
  { title: 'Titanic', isAvailable: true },
  { title: 'Avengers: Endgame', isAvailable: false },
]

const clearContent = () => {
    contentBlock.innerHTML = ''
};


const showFilms = () => {
    clearContent()
    const moviesList = document.createElement('ul');
    contentBlock.append(moviesList);

    for(const movie of movies) {
        console.log(movie.title)
        const movieItem = document.createElement('li')
        movieItem.textContent = `${movie.title} - ${movie.isAvailable ? 'Доступен' : 'Не доступен'}`
        moviesList.append(movieItem);
    }
}


showFilmsBn.addEventListener('click', showFilms)


const addFilm = () => {
    clearContent()

    const newFilmInput = document.createElement('input');
    newFilmInput.placeholder = "Film's name";

    const addFilmBtn = document.createElement('button');
    addFilmBtn.textContent = 'Add film';

    addFilmBtn.addEventListener('click', () => {
        const title = newFilmInput.value.trim();
        if (!title) return; {
            movies.push({ title, isAvailable: true });
            showFilms();
        }
    });

    contentBlock.append(newFilmInput, addFilmBtn);
}


addFilmsBn.addEventListener('click', addFilm)


