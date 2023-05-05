import React, { useEffect, useRef, useState } from 'react'
import { getAnimeQuote } from '../apis/getAnimeQuote'

const Home = () => {
    const [animeData, setAnimeData] = useState({})
    const inputRef = useRef(null)
    const buttonRef = useRef(null)

    const handleGetDefaultQuote = async () => {
        const data = await getAnimeQuote()
        // console.log('##', data)
        setAnimeData(data)
    }
    const handleGetRequiredAnimeQuote = async () => {
        buttonRef.current.disabled = true
        const requiredAnime = inputRef.current.value
        const data = await getAnimeQuote(requiredAnime)
        // console.log('$$', data)
        setAnimeData(data)
        inputRef.current.value = ''
        buttonRef.current.disabled = false
    }
    useEffect(() => {
        handleGetDefaultQuote()
    }, [])

    return (
        <div className='container'>
            <h1>Anime Quotes</h1>
            <div className='input-section'>
                <input type='text' placeholder='Enter anime name' ref={inputRef} />
                <button ref={buttonRef} onClick={handleGetRequiredAnimeQuote}>{'Go'}</button>
            </div>
            <div className='display-section'>
                <h3>
                    Anime:<br/> <span>{animeData.anime}</span>
                </h3>
                <h3>
                    Character:<br/> <span>{animeData.character}</span>
                </h3>
                <h3>
                    Quote:<br/> <span>{animeData.quote}</span>
                </h3>
            </div>
        </div>
    )
}

export default Home