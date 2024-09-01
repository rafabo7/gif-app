import { useState } from 'react'


function App() {

  const [search, setSearch] = useState(null)
  const [content, setContent] = useState(null)

  function handleSearch(e) {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

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
    console.log("Done")
    setContent(gifData)})  
}



return (
  <>
  <h1>Click Me</h1>
  <button onClick={() => getGifs(search)}>Here, click here please</button>
  <input type="text" name="search" id="search-input" onChange={(e) => handleSearch(e)} />
  {
    content ? (
      content.map( ( item ) => {
        return(<img src={item.url} key={item.id} alt="A gif" />)
      })
    ) : (
      <p>Sorry, no content yet</p>
    )
  }
  </>

)

}
  

export default App
