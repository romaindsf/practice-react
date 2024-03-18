import { Link, useParams } from 'react-router-dom'
import ChampionsList from '../../data/Champions_list.json'
import Header from '../../components/Header/Header'

export default function ChampionPage() {
  const { championId } = useParams()
  const championInfo = ChampionsList.find(
    (champion) => champion.id === championId
  )

  return (
    <div className="main_container">
      <Header />
      <h1>{championInfo.name}</h1>
      <Link to={'/'} className="accueil">
        Retour à l'accueil
      </Link>
    </div>
  )
}
