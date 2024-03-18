import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const { championId } = useParams()
  return (
    <header>
      <nav>
        {championId && (
          <Link to={'/'}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        )}
      </nav>
    </header>
  )
}
