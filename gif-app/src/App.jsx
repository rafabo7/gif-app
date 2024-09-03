import { useState } from 'react'
import { InputGroup } from './InputGroup'
import { Content } from './Content'


function App() {

  const [content, setContent] = useState(null)

  function getGifs(search) {
    console.log("Loadin")
  // const API_KEY = "9ZOiJat5aZTQ7SUUpyF1zQWvlmp4lZn7"
  // const URL = "api.giphy.com/v1/gifs/trending"

  fetch('https://api.giphy.com/v1/gifs/search?api_key=9ZOiJat5aZTQ7SUUpyF1zQWvlmp4lZn7&q=' + search + "&limit=6" , {mode: 'cors'})
  .then(function(response) {
      return response.json();
  })
  .then(function(response) {
      console.log(response)
      const data = response.data
      console.log(data)
      const gifData = data.map( ( item ) => {
        const url = item.images.downsized.url
        const id = item.id
        return {url, id}
      })
      return gifData
      
  })
  .then(function(gifData){
    console.log(gifData)
    console.log("Done")
    setContent(gifData)})  
}



return (
  <>
  <h1>Gif finder</h1>
  <InputGroup onSearch={getGifs} />
  <Content content={content} />
  
  </>

)

}
  

export default App
