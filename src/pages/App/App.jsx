import { useState } from 'react'
import { Link } from 'react-router-dom'
import ChampionsList from '../../data/Champions_list.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [isOpen, setIsOpen] = useState({})
  const [alphabetical, setAlphabetical] = useState(0)
  const handleClick = (id) => {
    setIsOpen((isOpen) => ({ ...isOpen, [id]: !isOpen[id] }))
  }
  const handleAzOrder = () => {
    setAlphabetical(alphabetical === 1 ? 2 : 1)
    if (alphabetical === 1) {
      ChampionsList.sort((a, b) => {
        return a.name - b.name
      })
    }
  }
  return (
    <div className="main_container">
      <h1>Les meilleurs champions !</h1>
      <div className="sortBy">
        <button>Default order</button>
        <FontAwesomeIcon icon={faSort} onClick={handleAzOrder} />
      </div>
      <ul>
        {ChampionsList.map((champion) => (
          <li key={champion.id} className="champion__card">
            <div onClick={() => handleClick(champion.id)}>
              <img
                src={champion.image}
                alt={`icone du champion ${champion.name}`}
              />
              <h2>{champion.name}</h2>
            </div>

            {isOpen[champion.id] && (
              <>
                <p className="champion__card__description">
                  {champion.description}
                </p>
                <Link to={`/champion/${champion.id}`}>
                  {`Aller à la page de ${champion.name}`}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
