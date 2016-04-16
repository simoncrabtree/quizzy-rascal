import React from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './selectors/mainPage'
import { login, changeTeamName, fetchTeam } from './actions'

const MainPage = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(fetchTeam())
  },

  teamNameChanged: function(e) {
    this.props.dispatch(changeTeamName(e.target.value))
  },

  handleSubmit: function() {
    this.props.dispatch(login(this.props.teamName))
  },

  render: function () {
    if(!this.props.token)
      return (
        <div className='form'>
          <div className='form-group'>
            <label className='control-label col-sm-3'>Team Name</label>
            <div className='col-sm-9'>
              <input type='text' placeholder='Enter your team name here' name='username' className='form-control' value={this.props.teamName} onChange={this.teamNameChanged} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-3 col-sm-9'>
              <input className='btn' type='submit' value='Login' isActive={this.props.pending} onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      )

    return (
      <div>Hello {this.props.teamName}</div>
    )
  }
})

export default connect(mapStateToProps)(MainPage)
