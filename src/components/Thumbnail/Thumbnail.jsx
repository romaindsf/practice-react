import { Link } from 'react-router-dom'
import { useState } from 'react'

export function ChampionCard({ id, name, image, description }) {
  const [isOpen, setIsOpen] = useState({})

  const handleClick = (id) => {
    setIsOpen((isOpen) => ({ ...isOpen, [id]: !isOpen[id] }))
  }
  return (
    <li key={id} className="champion__card">
      <div onClick={() => handleClick(id)}>
        <img src={image} alt={`icone du champion ${name}`} />
        <h2>{name}</h2>
      </div>

      {isOpen[id] && (
        <>
          <p className="champion__card__description">{description}</p>
          <Link to={`/champion/${id}`}>{`Aller à la page de ${name}`}</Link>
        </>
      )}
    </li>
  )
}
