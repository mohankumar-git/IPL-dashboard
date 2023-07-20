import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    matchStatus,
    competingTeam,
    result,
  } = matchCardDetails

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-status ${matchStatus === 'Won' ? 'won' : 'lost'}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
