import logo from './logo.svg';
import './App.css';
import Poster from './components/Poster/Poster';

const arrayMovies = [
  {
    image: 'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5.jpg',
    title: 'Jai Bhim',
    director: 'T.J. Gnanavel',
    categories: ['Drama', 'Crimen', 'Misterio'],
    año: '2021',
    rate: 9.3
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg',
    title: 'Cadena Perpetua',
    director: 'Frank Darabont',
    categories: ['Drama'],
    año: '1994',
    rate: 9.3
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg',
    title: 'El Padrino',
    director: 'Francis Ford Coppola',
    categories: ['Drama', 'Crimen'],
    año: '1972',
    rate: 9.2
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.jpg',
    title: 'El Caballero Oscuro',
    director: 'Christopher Nolan',
    categories: ['Drama', 'Crimen', 'Acción'],
    año: '2008',
    rate: 9.0
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg',
    title: 'El Padrino: Parte II',
    director: 'Francis Ford Coppola',
    categories: ['Drama', 'Crimen'],
    año: '1974',
    rate: 9.0
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@.jpg',
    title: '12 hombres sin piedad',
    director: 'Sidney Lumet',
    categories: ['Drama', 'Crimen'],
    año: '1957',
    rate: 9.0
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg',
    title: 'El Señor de los Anillos: El retorno del rey',
    director: 'Peter Jackson',
    categories: ['Drama', 'Action', 'Adventure'],
    año: '2003',
    rate: 8.9
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg',
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    categories: ['Drama', 'Crimen'],
    año: '',
    rate: 8.9
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg',
    title: 'La lista de Schindler',
    director: 'Steven Spielberg',
    categories: ['Drama', 'Biografía', 'Histórica'],
    año: '',
    rate: 8.9
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg',
    title: 'Origen',
    director: 'Christopher Nolan',
    categories: ['Acción', 'Aventura', 'Ciencia Ficción'],
    año: '',
    rate: 8.8
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Poster movies={arrayMovies}></Poster>
    </div>
  );
}

export default App;
