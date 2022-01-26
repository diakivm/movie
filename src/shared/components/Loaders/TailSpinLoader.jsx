import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function TailSpinLoader({width, height, color = "#FFC107"}) {
  return  (
         <div className="loader">
            <TailSpin color={color} height={width} width={height} />
         </div>
  )
}
