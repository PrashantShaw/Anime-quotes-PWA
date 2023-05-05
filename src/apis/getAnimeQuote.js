
const URL = "https://animechan.vercel.app/api/random/anime"

export const getAnimeQuote = async (animeName = 'naruto') => {
    const urlWithAnimeName = `${URL}?title=${animeName.toLowerCase()}`
    const response = await fetch(urlWithAnimeName)
    const data = await response.json()
    console.log(data)
    return data
}

