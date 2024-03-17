import { useParams } from 'react-router-dom'

export default function ChampionPage() {
  const { championId } = useParams()

  return <h1>{championId}</h1>
}
