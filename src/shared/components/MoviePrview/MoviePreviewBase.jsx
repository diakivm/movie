import React from 'react'
import {useNavigate} from 'react-router-dom'
import './MoviePreview.scss'


export default function MoviePreviewBase({item}) {


   const URL_IMAGE = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
   const navigate = useNavigate()

   function openMediaPage(){
      navigate(`/media/${item.id}`)
   }


   return (
      <div className='preview__container'>
          <div className="preview__img _ibg">
              <img src={URL_IMAGE} alt="img"/>
              <div className="_icon-play img-play" onClick={openMediaPage}></div>
          </div>
      </div>
   )
}
