import React from "react";
import MovieService from "./API/MovieService";
import useFetching from "./hooks/useFetching";
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import MainPage from "./pages/main/MainPage";
import MovieContext from './context/MovieContext'
import Dalay from './utils/Dalay'
import SearchPage from "./pages/search/SearchPage";
import {Routes,Route, useNavigate} from 'react-router-dom'
import Seriales from "./pages/seriales/Seriales";
import MediaPage from "./pages/media/MediaPage";

import './styles/sass/style.scss'
import Button from "./shared/UI/Button/Button";
function App() {
  
  //#region popular movies
  const [popularMovies, setPopularMovies] = React.useState([])
  const [popularMoviesPagination, setPopularMoviesPagination] = React.useState({currentPage:1, totalPages: 500})

  const [fetchMovies, isLoadingMovies, errorValueMovies] = useFetching(async() => {
     const response = await MovieService.getPopularMovie(popularMoviesPagination.currentPage)
     await Dalay.wait(1)
     setPopularMovies(response.data.results)
  })

  React.useEffect(()=>{
    fetchMovies()
  },[popularMoviesPagination])
  //#endregion

  //#region  serch movies
  const [searchQuery, setSearchQuery] = React.useState('')
  const [searchMovies, setSearchMovies] = React.useState([])
  const [searchQueryForTitle, setSearchQueryForTitle] = React.useState('')
  const [fetchSearchQuery, isSearchQueryLoading, errorSearchQueryValue] = useFetching( async () => {
     const response = await MovieService.getFilmsByTitle(searchQuery)
     await Dalay.wait(1)
     setSearchMovies(response.data.results)
  })

  let navigate = useNavigate()
  function getFilmsByQuery(e){
    e.preventDefault()

      if(searchQuery){
        navigate('/search')
          setSearchQueryForTitle(searchQuery)
          setSearchQuery('')

        fetchSearchQuery()
      }
  }
  //#endregion

  //#region latest movies
  const [nowPlayingMovies, setNowPlayingMovies] = React.useState([])
  const [fetchNowPlayingMovies, isNowPlayingMoviesLoading, errorValueNowPlayingMovies] = useFetching(async () => {
    const response = await MovieService.getNowPlayingMovie()
    await Dalay.wait(1)
    setNowPlayingMovies(response.data.results)
  })

  React.useState(() => {
    fetchNowPlayingMovies()
  },[])
  //#endregion

  return (
    <div className="wrapper _container">
      <MovieContext.Provider value={{popularMovies, isLoadingMovies, popularMoviesPagination, setPopularMoviesPagination,
                                     searchQuery, setSearchQuery, getFilmsByQuery, searchMovies, isSearchQueryLoading, searchQueryForTitle,
                                     nowPlayingMovies, isNowPlayingMoviesLoading}}>

          <Header/> 
           <div className="page">
              <Routes>
                  <Route path="/search" element={<SearchPage/>}/>
                  <Route path="/media/:id" element={<MediaPage/>}/>
                  <Route path="/seriales" element={<Seriales/>}/>
                  <Route path="/" element={<MainPage/>}/>
              </Routes>
          </div>
          <Footer/>
       </MovieContext.Provider>
    </div>
  );
}

export default App;
