import React from 'react'
import MovieService from '../../../API/MovieService';
import useFetching from '../../../hooks/useFetching';
import VideoModal from '../Modal/VideoModal';
import TailSpinLoader from '../../../shared/components/Loaders/TailSpinLoader'
import {useNavigate} from 'react-router-dom'
import './MoviePreview.scss'
import Dalay from '../../../utils/Dalay';
import Player from '../Player/Player';

export default function MoviePreview({item}) {

   //// console.log(`https://www.youtube.com/watch?v=${vid[0]?.key}`)

   const URL_IMAGE = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
   const [modalShow, setModalShow] = React.useState(false)

   const [videoKeys, setVideoKeys] = React.useState([])
   const [fetchVideoKeys, isVideoLoading, errorVideovalue] = useFetching( async () => {
         const response = await MovieService.getFilmTrailer(item.id)
         await Dalay.wait(1)
         setVideoKeys(response.data.results)
   })


   function onClickVideo() {
      fetchVideoKeys()
      setModalShow(true)
   }

   const navigate = useNavigate()

   function openMediaPage(){
      navigate(`/media/${item.id}`)
   }


   return (
      <div className='preview__container'>
          <div className="preview__img _ibg">
              <img src={URL_IMAGE} alt="img"/>
              <div className="_icon-play img-play" onClick={openMediaPage}></div>
              <div className="_icon-dots img-more" onClick={onClickVideo}></div>
          </div>
            <VideoModal show={modalShow}
                        onHide={() => setModalShow(false)}
                        >
               {
      isVideoLoading ?
                     <TailSpinLoader width={80} height={80}/>
                     :
                     <>
                        <iframe className='trailer'
                              src={`https://www.youtube.com/embed/${videoKeys[0]?.key}`}
                              allowFullScreen>
                        </iframe>
                        <hr />
                        <p>{item?.overview}</p>
                     </>

               }


            </VideoModal>
          <div className="preview__info">
           <h4 className="preview__title" onClick={openMediaPage}>{item?.title}</h4>
             <div className="preview__about">
               <div className="preview__year">{item?.release_date?.split('-')[0]}</div>
               <div className="preview__vote">{item?.vote_average}</div>
             </div>
          </div>
      </div>
   )
}
