import React from 'react';
import './Button.scss'

export default function Button(props) {
  return (
            <button {...props} class="button">
               {
                  props.children
               }
            </button>
  )
}
