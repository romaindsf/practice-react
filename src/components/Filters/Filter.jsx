import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

export default function SortByName({
  arrayData,
  setarrayData,
  originalArrayData,
}) {
  const [indice, setIndice] = useState('')
  const sortByName = () => {
    indice === ''
      ? setIndice('A-Z')
      : indice === 'A-Z'
      ? setIndice('Z-A')
      : setIndice('A-Z')
    const sortedArray = [...arrayData].sort((a, b) =>
      indice === 'A-Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    setarrayData(sortedArray)
    console.log(indice)
  }
  const resetOrder = () => {
    setIndice(0)
    setarrayData(
      originalArrayData.map((champion) => ({
        id: champion.id,
        name: champion.name,
        image: champion.image,
        description: champion.description,
      }))
    )
  }
  return (
    <div className="sortBy">
      <button onClick={resetOrder}>Reset order</button>
      <FontAwesomeIcon icon={faSort} onClick={sortByName} />
    </div>
  )
}
