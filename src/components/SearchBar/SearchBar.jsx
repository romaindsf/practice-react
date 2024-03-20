import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({
  arrayData,
  setArrayData,
  originalArrayData,
}) {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase())
    originalArrayData !== arrayData && setArrayData(originalArrayData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setArrayData(
      arrayData.filter((champion) => inputValue === champion.name.toLowerCase())
    )
  }

  return (
    <form className="search_bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={inputValue}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </form>
  )
}
