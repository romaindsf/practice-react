import ChampionsList from '../../data/Champions_list.json'

export default function App() {
  return (
    <>
      <h1>Les meilleurs champions !</h1>
      <ul>
        {ChampionsList.map((champion) => (
          <li key={champion.id}>{champion.name}</li>
        ))}
      </ul>
    </>
  )
}
