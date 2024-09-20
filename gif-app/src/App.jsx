import { useState } from 'react'
import { InputGroup } from './Components/InputGroup'
import { Content } from './Components/Content'
import { useGifs } from './Hooks/useGifs'


function App() {
  const [search, setSearch] = useState(null)

  const {gifs, loading, getGifs} = useGifs({ search })
  



return (
  <>
  <h1>Gif finder</h1>
  <InputGroup 
      onSearch={getGifs}
      search={search} 
      setSearch={setSearch}
       />
  {loading && <p>Content Loading...</p>}
  <Content content={gifs}  />
  
  </>

)

}
  

export default App
