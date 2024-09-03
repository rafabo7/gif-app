import { useState } from "react"

 export function InputGroup ({onSearch}) {
  
    const [search, setSearch] = useState(null)

  function handleSearch(e) {
    const newSearch = e.target.value
    setSearch(newSearch)
  }


    return (
        <section className="search-section">
            <button onClick={() => onSearch(search)}>Here, click here please</button>
            <input type="text" name="search" id="search-input" onChange={(e) => handleSearch(e)} />
        </section>

    )
}