import React from 'react'
import { navElements } from './assets/constants/index_'

export default function NaveBar() {
  return (
    <div>
        <ul>
            {
                navElements.map((e)=>{
                    return(
                        <li key={e.name}>

                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
