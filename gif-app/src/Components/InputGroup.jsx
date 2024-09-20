import { useState } from "react"
import '../Styles/InputGroup.css'

 export function InputGroup ({onSearch}) {
  
    const [search, setSearch] = useState(null)

  function handleSearch(e) {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(search)
  }


    return (
        <form className="form" action="#" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="search" id="search-input" onChange={(e) => handleSearch(e)} />
          <button>Search</button>
        </form>

    )
}