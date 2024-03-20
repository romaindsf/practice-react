import ChampionsList from '../../data/Champions_list.json'
import { ChampionCard } from '../../components/Thumbnail/Thumbnail'
import SortByName from '../../components/Filters/Filter'
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

  return (
    <div className="main_container">
      <h1>Les meilleurs champions !</h1>
      <SortByName
        arrayData={arrayDataThumbnail}
        setarrayData={setarrayDataThumbnail}
        originalArrayData={ChampionsList}
      />
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
