import React from "react";
import MovieService from "./API/MovieService";
import useFetching from "./hooks/useFetching";
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Main from "./pages/main/Main";
import MovieContext from './context/MovieContext'
import './styles/sass/style.scss'

function App() {

  const [popularMovies, setPopularMovies] = React.useState([])
  const [popularMoviesPagination, setPopularMoviesPagination] = React.useState({currentPage:1, totalPages: 142})

  const [fetchMovies, isLoadingMovies, errorValueMovies] = useFetching(async() => {
     const response = await MovieService.getPopularMovie(popularMoviesPagination.currentPage)
     setPopularMovies(response.data.results)
  })


  React.useEffect(()=>{
    fetchMovies()
  },[popularMoviesPagination])




  return (
    <div className="wrapper _container">
      <MovieContext.Provider value={{popularMovies, popularMoviesPagination, setPopularMoviesPagination}}>
          <Header/>
          <Main/>
          <Footer/>
       </MovieContext.Provider>
    </div>
  );
}

export default App;
