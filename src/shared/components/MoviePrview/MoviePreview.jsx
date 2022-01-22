import React from 'react'
import MovieService from '../../../API/MovieService';
import useFetching from '../../../hooks/useFetching';
import VideoModal from '../Modal/VideoModal';
import './MoviePreview.scss'

export default function MoviePreview({item}) {

   //// console.log(`https://www.youtube.com/watch?v=${vid[0]?.key}`)

   const URL_IMAGE = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
   const [modalShow, setModalShow] = React.useState(false)

   const [videoKeys, setVideoKeys] = React.useState([])
   const [fetchVideoKeys, isVideoLoading, errorVideovalue] = useFetching( async () => {
         const response = await MovieService.getFilmTrailer(item.id)
         setVideoKeys(response.data.results)
   })


   function onClickVideo() {
      fetchVideoKeys()
      setModalShow(true)
   }



   return (
      <div className='preview__container'>
          <div className="preview__img _ibg">
              <img src={URL_IMAGE} alt="img"/>
              <div className="_icon-play img-play"></div>
              <div className="_icon-dots img-more" onClick={onClickVideo}></div>
          </div>
            <VideoModal show={modalShow}
                        onHide={() => setModalShow(false)}>
                     <iframe className='trailer'
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
