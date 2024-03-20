import ChampionsList from '../../data/Champions_list.json'
import { ChampionCard } from '../../components/Thumbnail/Thumbnail'
import SortList from '../../components/Filters/Filter'
import { useState } from 'react'

export default function App() {
  const [arrayDataThumbnail, setarrayDataThumbnail] = useState(
    ChampionsList.map((champion) => ({
      id: champion.id,
      name: champion.name,
      image: champion.image,
      description: champion.description,
      favorite: champion.favorite,
    }))
  )

  return (
    <div className="main_container">
      <h1>Les meilleurs champions !</h1>
      <SortList
        arrayData={arrayDataThumbnail}
        setArrayData={setarrayDataThumbnail}
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
