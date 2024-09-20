

const API_KEY = "9ZOiJat5aZTQ7SUUpyF1zQWvlmp4lZn7"

export async function fetchGifs ({ search }) {

    if (!search) return

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12` , {mode: 'cors'})

    const json = await response.json()
    const data = json.data

    const gifData = data.map( ( item ) => {
        const url = item.images.downsized.url
        const id = item.id
        return {url, id}
      })

      return gifData
   

}