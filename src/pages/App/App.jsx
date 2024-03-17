import { useState } from 'react'
import ChampionsList from '../../data/Champions_list.json'

export default function App() {
  const [isOpen, setIsOpen] = useState({})
  const handleClick = (id) => {
    setIsOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }
  return (
    <>
      <h1>Les meilleurs champions !</h1>
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
              <p className="champion__card__description">
                {champion.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
