import React from 'react';
import MovieContext from '../../context/MovieContext'
import Loaders from '../../utils/Loaders'
import MovieContainer from '../../shared/components/MovieContainer/MovieContainer'
import TailSpinLoader from '../../shared/components/Loaders/TailSpinLoader'

import './SearchPage.scss'
import { TailSpin } from 'react-loader-spinner';

export default function SearchPage() {

  let {searchMovies, isSearchQueryLoading, searchQueryForTitle} = React.useContext(MovieContext)

  let fakeArray = Loaders.getFakeMoviePreview(5, {width:"100%", 
                                                    height:340,
                                                    speed:2,
                                                    backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                    foregroundColor:"rgba(60, 60, 60, 0.3)"})

   return (
        <div className="search-page">
          <div className="search-page__items">
             <h2 className="search-page__title">{`Результаты поиска <<${searchQueryForTitle}>>`}</h2>
             {
               isSearchQueryLoading ?
                                    <TailSpinLoader width={80} height={80}/>
                                    :
                                    (
                                       searchMovies.length == 0  
                                                            ? 
                                                            <p className="search-page__masegge-no-items">Ваш поиск не дал результатов</p>
                                                            :
                                                            <MovieContainer items={searchMovies} fakeItems={fakeArray} isItemsLoading={isSearchQueryLoading}/>
                                    )
             }
          </div>
      </div>
   )
}
