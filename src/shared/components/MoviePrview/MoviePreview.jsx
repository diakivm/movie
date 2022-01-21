import React from 'react'
import MovieService from '../../../API/MovieService';
import VideoModal from '../Modal/VideoModal';
import './MoviePreview.scss'

export default function MoviePreview({item}) {

   //// console.log(`https://www.youtube.com/watch?v=${vid[0]?.key}`)

   const URL_IMAGE = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
   const [modalShow, setModalShow] = React.useState(false);
   const [videoKeys, setVideoKeys] = React.useState([])


   async function getVideosKey () {
      const response = await MovieService.getFilmTrailer(item.id)
         setVideoKeys(response.data.results)
   }


   function onClickVideo() {
      getVideosKey()
      setModalShow(true)
   }



   return (
      <div className='preview__container'>
          <div className="preview__img _ibg" onClick={onClickVideo}>
              <img src={URL_IMAGE} alt="img"/>
              <img src="/img/play-circle-regular.svg" className='img-play' />
          </div>
          <VideoModal show={modalShow}
                      onHide={() => setModalShow(false)}>
                  <iframe width="100%" height="400px"
                        src={`https://www.youtube.com/embed/${videoKeys[0]?.key}`}
                        allowFullScreen>
                  </iframe>
                  <hr />
                  <p>{item.overview}</p>
         </VideoModal>
          <div className="preview__info">
           <h4 className="preview__title">{item.title}</h4>
             <div className="preview__about">
               <div className="preview__year">{item.release_date.split('-')[0]}</div>
               <div className="preview__vote">{item.vote_average}</div>
             </div>
          </div>
      </div>
   )
}
