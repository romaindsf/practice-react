import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faStar } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar/SearchBar'

export default function SortList({
  arrayData,
  setArrayData,
  originalArrayData,
}) {
  const [indice, setIndice] = useState('default')

  const resetOrder = () => {
    setIndice('default')
    setArrayData(
      originalArrayData.map((champion) => ({
        id: champion.id,
        name: champion.name,
        image: champion.image,
        description: champion.description,
        favorite: champion.favorite,
      }))
    )
  }
  const sortByName = () => {
    indice === 'default'
      ? setIndice('A-Z')
      : indice === 'A-Z'
      ? setIndice('Z-A')
      : setIndice('A-Z')
    const sortedArray = [...arrayData].sort((a, b) =>
      indice === 'A-Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    setArrayData(sortedArray)
  }
  const sortByFavorite = () => {
    setIndice('favorite')
    setArrayData([...arrayData].sort((a, b) => a.favorite - b.favorite))
  }
  return (
    <div className="sortBy">
      <div className="sortBy__icons">
        <button onClick={resetOrder}>Reset</button>
        <FontAwesomeIcon icon={faSort} onClick={sortByName} />
        <FontAwesomeIcon icon={faStar} onClick={sortByFavorite} />
      </div>
      <SearchBar
        arrayData={arrayData}
        setArrayData={setArrayData}
        originalArrayData={originalArrayData}
      />
    </div>
  )
}
