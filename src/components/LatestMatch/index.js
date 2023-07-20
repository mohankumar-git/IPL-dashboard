import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
    data,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match">
        <div className="competing-team-details-container">
          <div className="competing-team-details">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="latest-match-date">{data}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="horizontal-line" />
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo-lg"
        />
        <div className="innings-details">
          <p className="innings-heading">First Innings</p>
          <p className="innings-team">{firstInnings}</p>
          <p className="innings-heading">Second Innings</p>
          <p className="innings-team">{secondInnings}</p>
          <p className="innings-heading">Man of The Match</p>
          <p className="innings-team">{manOfTheMatch}</p>
          <p className="innings-heading">Umpires</p>
          <p className="innings-team">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
