import React from 'react'
import '../../styles/sass/style.scss'
import './MainPage.scss'
import MovieContainer from '../../shared/components/MovieContainer/MovieContainer'
import MovieContext from '../../context/MovieContext'
import PaginationList from '../../shared/components/Pagination/PaginationList'
import Loaders from '../../utils/Loaders'
import MoviePreviewSlider from '../../shared/components/Sliders/MoviePreviewSlider'

export default function MainPage() {

   const {popularMovies, isLoadingMovies, popularMoviesPagination, setPopularMoviesPagination,
          nowPlayingMovies, isNowPlayingMoviesLoading} = React.useContext(MovieContext)

   let fakeArray = Loaders.getFakeMoviePreview(10, {width:"100%", 
                                                    height:340,
                                                    speed:2,
                                                    backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                    foregroundColor:"rgba(60, 60, 60, 0.3)"})

   return (
      <div className='page__main'>
         <div className="section__slider-now-paying">
               <MoviePreviewSlider items={nowPlayingMovies} isLoading={isNowPlayingMoviesLoading} swiperClass={"popular-films-slider"} swiperSlideClass={"slide-preview-films"}/>
         </div>
         <div className="section__media-list media-list">
             <div className="media-list__list">
                <MovieContainer items={popularMovies} fakeItems={fakeArray} isItemsLoading={isLoadingMovies}  title={'Популярние'}/>
             </div>
             <div className="media-list__pagination">
                <PaginationList pagination={popularMoviesPagination} setPagination={setPopularMoviesPagination}/>
            </div>
         </div>
      </div>
   )
}