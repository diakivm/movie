import React from 'react'
import './MovieContainer.scss'
import MoviePrview from '../MoviePrview/MoviePreview'

export default function MovieContainer({ items, fakeItems, title, isItemsLoading = false }) {


   return (
      <div className='movie'>
        <h2 className="movie__title">{title}</h2>
         <div className="movie__container">
            {
     isItemsLoading ?
                     fakeItems
                     :
                     items.map(item => {
                        return <MoviePrview key={item.id} item={item} />
                     })
            }
         </div>
      </div> 
   )
}
