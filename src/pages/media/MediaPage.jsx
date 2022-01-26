import React, { useMemo } from 'react';
import { TailSpin } from 'react-loader-spinner';
import {useParams} from 'react-router-dom'
import MovieService from '../../API/MovieService';
import useFetching from '../../hooks/useFetching';
import TailSpinLoader from '../../shared/components/Loaders/TailSpinLoader';
import Player from '../../shared/components/Player/Player';
import Dalay from '../../utils/Dalay';
import SomeFunc from '../../utils/SomeFunc';
import './MediaPage.scss'

export default function MediaPage() {

   const  params = useParams()
   const separator = ", "
   const URL_IMAGE = `https://image.tmdb.org/t/p/w500/`

   const [media, setMedia] = React.useState({})
   const [fetchMedia, isLoadingMedia, errorMediaValue] = useFetching(async () => {
      const response = await MovieService.getFilmById(params.id)
      await Dalay.wait(1)
      setMedia(response.data)
   })

   React.useEffect(() => {
      fetchMedia()
   },[params])
   

  return(
      <div className="media">
         {
            console.log(media)
         }
         
          {
             isLoadingMedia ?
                            <TailSpinLoader width={80} height={80}/>
                            : 
                            <>
                               <div className="media__info-conteiner">
                                  <img src={URL_IMAGE+media?.backdrop_path} className='media__back-drop' alt="back-drop"/>
                                  <div className="media__back-drop-filter"></div>
                                   <div style={{padding: "20px"}}>
                                     <h3 className="media__title">{media?.title}</h3>
                                        <div className='media__info-wrap'>
                                           <div className="media__image _ibg">
                                              <img src={URL_IMAGE+media?.poster_path} alt="poster"/>
                                           </div>
                                           <div className="media__more-about">
                                                <div className="media__more-about-section">
                                                       <div className="media__name-section">Рейтинг:</div>
                                                       <div className="media__section-data">IMDb: {media?.vote_average+` (${media?.vote_count})`}</div>
                                                 </div>
                                                 <div className="media__more-about-section">
                                                       <div className="media__name-section">Дата выхода:</div>
                                                       <div className="media__section-data">{media?.release_date}</div>
                                                 </div>
                                                 <div className="media__more-about-section">
                                                       <div className="media__name-section">Жанр:</div>
                                                       <div className="media__section-data">{SomeFunc.getString(media?.genres, "name", separator)}</div>
                                                 </div>
                                                 <div className="media__more-about-section">
                                                       <div className="media__name-section">Страна:</div>
                                                       <div className="media__section-data">{SomeFunc.getString(media?.production_countries, "name", separator)}</div>
                                                 </div>
                                                 <div className="media__more-about-section">
                                                       <div className="media__name-section">Время:</div>
                                                       <div className="media__section-data">{media?.runtime} мин.</div>
                                                 </div>
                                           </div>
                                        </div>
                                     <p className="media__overview">{media?.overview}</p>
                                   </div>
                               </div>
                              <div className="media__content">
                                  <Player title={media?.title}/>
                              </div>
                           </>
          }
      </div>
  )
}
