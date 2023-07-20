import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchDetails: {},
    recentMatches: [],
    backgroundColor: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  formattedData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    data: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetailsData = data.latest_match_details
    const recentMatchesData = data.recent_matches

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatchDetails: this.formattedData(latestMatchDetailsData),
      recentMatches: recentMatchesData.map(eachData =>
        this.formattedData(eachData),
      ),
      backgroundColor: id,
      isLoading: false,
    })
  }

  renderTeamMatch = () => {
    const {latestMatchDetails, recentMatches, teamBanner} = this.state
    return (
      <div className="team-matches">
        <img src={teamBanner} className="team-banner" alt="team banner" />
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          recentMatches={recentMatches}
        />
        <ul className="match-card-container">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchCardDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      backgroundColor,
      isLoading,
    } = this.state
    console.log(latestMatchDetails)
    console.log(recentMatches)

    return (
      <div className={`${backgroundColor} team-matches-container`}>
        {isLoading ? (
          <div className="loader-container-team-match">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </div>
    )
  }
}

export default TeamMatches
