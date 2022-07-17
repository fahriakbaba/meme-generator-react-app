import React from 'react'
const URL = `https://api.imgflip.com/get_memes`;

function Main() {
    console.log(URL);
  return (
    <section className='container'>
        <form className='form'>
            <input className='form-input' type="text" placeholder='Top Text' />
            <input className='form-input' type="text" placeholder='Botton Text' />
            <button type='submit' className='btn'>Get a new random meme  &#128527;</button>
        </form>
    </section>
  )
}

export default Main;