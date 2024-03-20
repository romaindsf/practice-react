import ChampionsList from '../../data/Champions_list.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { ChampionCard } from '../../components/ChampionCard/ChampionCard'
import { useState } from 'react'

export default function App() {
  const [arrayDataThumbnail, setarrayDataThumbnail] = useState(
    ChampionsList.map((champion) => ({
      id: champion.id,
      name: champion.name,
      image: champion.image,
      description: champion.description,
    }))
  )
  const [indice, setIndice] = useState(0)
  const sortByName = () => {
    indice === 0 ? setIndice(1) : indice === 1 ? setIndice(2) : setIndice(1)
    if (indice === 2) {
      const sortedReverseAlphabetically = [...arrayDataThumbnail].sort((a, b) =>
        b.name.localeCompare(a.name)
      )
      setarrayDataThumbnail(sortedReverseAlphabetically)
    } else {
      const sortedAlphabetically = [...arrayDataThumbnail].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
      setarrayDataThumbnail(sortedAlphabetically)
    }
  }
  const resetOrder = () => {
    setIndice(0)
    setarrayDataThumbnail(
      ChampionsList.map((champion) => ({
        id: champion.id,
        name: champion.name,
        image: champion.image,
        description: champion.description,
      }))
    )
  }

  console.log(arrayDataThumbnail)
  return (
    <div className="main_container">
      <h1>Les meilleurs champions !</h1>
      <div className="sortBy">
        <button onClick={resetOrder}>Reset order</button>
        <FontAwesomeIcon icon={faSort} onClick={sortByName} />
      </div>
      <ul>
        {arrayDataThumbnail.map(({ id, name, image, description }) => (
          <ChampionCard
            key={id}
            id={id}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </ul>
    </div>
  )
}
