import React from 'react'
import '../../styles/sass/style.scss'
import './Main.scss'
import MovieContainer from '../../shared/components/MovieContainer/MovieContainer'
import MovieContext from '../../context/MovieContext'
import PaginationList from '../../shared/components/Pagination/PaginationList'

export default function Main() {

   const {popularMovies, popularMoviesPagination, setPopularMoviesPagination} = React.useContext(MovieContext)

   return (
      <div className='page'>
         <div className="page__popular popular">
             <div className="popular__movies">
                <MovieContainer items={popularMovies} title={'Популярние'}/>
             </div>
             <div className="popular__pagination">
                <PaginationList pagination={popularMoviesPagination} setPagination={setPopularMoviesPagination}/>
            </div>
          </div>
      </div>
   )
}
