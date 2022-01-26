import React from "react"
import ContentLoader from "react-content-loader"

const MoviePreviewLoaderBase = (props) => (
  <ContentLoader   
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" /> 
  </ContentLoader>
)

export default MoviePreviewLoaderBase