import { useState } from "react"
import './InputGroup.css'

 export function InputGroup ({onSearch}) {
  
    const [search, setSearch] = useState(null)

  function handleSearch(e) {
    const newSearch = e.target.value
    setSearch(newSearch)
  }


    return (
        <section className="search-section">
            <input type="text" name="search" id="search-input" onChange={(e) => handleSearch(e)} />
            <button onClick={() => onSearch(search)}>Search</button>
        </section>

    )
}