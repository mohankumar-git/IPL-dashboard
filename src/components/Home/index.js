import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamLists: [], isLoading: true}

  componentDidMount() {
    this.getTeamLists()
  }

  getTeamLists = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const teamsArray = data.teams
    this.setState({
      teamLists: teamsArray.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.team_image_url,
      })),
      isLoading: false,
    })
  }

  displayLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamCard = () => {
    const {teamLists} = this.state
    return (
      <div className="team-card-container">
        <div className="team-card-lists">
          {teamLists.map(eachCard => (
            <TeamCard key={eachCard.id} teamCard={eachCard} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-dashboard-container">
          <div className="ipl-dashboard">
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="app-heading">IPL Dashboard</h1>
            </div>
            {isLoading ? this.displayLoader() : this.renderTeamCard()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
