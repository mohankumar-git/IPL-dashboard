import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, imageUrl} = teamCard

  return (
    <Link className="team-card-item" to={`/team-matches/${id}`}>
      <img src={imageUrl} alt={`${name}`} className="team-card-img" />
      <p className="team-card-name">{name}</p>
    </Link>
  )
}

export default TeamCard
