import React from 'react'
import './SendMessage.css'
import plus from '../img/plus.png'
import gallery from '../img/gallery.png'
import sticker from '../img/sticker.png'
import gif from '../img/gif.png'
import laugh from '../img/laugh.png'

function SendMessage() {
  return (
    <div className='sendmessage'>
        <div className='sendmessage-accessories'>
        <img src={plus} />
        <img src={gallery} />
        <img src={sticker} />
        <img src={gif} />
        </div>
        <div className='text-message'>
        <input type="text" placeholder="Aa"/>
        </div>
        <div className='thumbsup'>
        <img src={laugh} />
        </div>
    </div>
  )
}

export default SendMessage