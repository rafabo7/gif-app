import { useState } from 'react'


function App() {

  // const [search, setSearch] = useState(null)
  const [content, setContent] = useState(null)

  function getGifs() {
    console.log("Loadin")
  // const API_KEY = "9ZOiJat5aZTQ7SUUpyF1zQWvlmp4lZn7"
  // const URL = "api.giphy.com/v1/gifs/trending"

  fetch('https://api.giphy.com/v1/gifs/translate?api_key=9ZOiJat5aZTQ7SUUpyF1zQWvlmp4lZn7&s=jojo', {mode: 'cors'})
  .then(function(response) {
      return response.json();
  })
  .then(function(response) {
      console.log(response)
      const imageUrl = response.data.images.downsized.url
      console.log(imageUrl)
      return imageUrl
  })
  .then(function (imageUrl) {
    setContent(imageUrl)
  })


  
  
}

// function handleClick () {
//   const newData = getGifs()
//   console.log(newData.result)
//   setContent(newData)
// }

return (
  <>
  <h1>Click Me</h1>
  <button onClick={() => getGifs()}>Here, click here please</button>
  {
    content ? (
      <img src={content} alt="a gif" />
    ) : (
      <p>Sorry, no content yet</p>
    )
  }
  </>

)

}
  

export default App
