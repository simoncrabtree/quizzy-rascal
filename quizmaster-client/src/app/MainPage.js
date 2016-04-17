import React from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './selectors/mainPage'
import { login, changePassword, fetchTeamsIfNecessary } from './actions'

const MainPage = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(fetchTeamsIfNecessary())
  },

  passwordChanged: function(e) {
    this.props.dispatch(changePassword(e.target.value))
  },

  handleSubmit: function() {
    this.props.dispatch(login(this.props.password))
  },

  render: function () {
    if(!this.props.isLoggedIn)
      return (
        <div className='form'>
          <div className='form-group'>
            <label className='control-label col-sm-3'>Quizmaster password</label>
            <div className='col-sm-9'>
              <input type='text' placeholder='Enter password' name='password' className='form-control' value={this.props.teamName} onChange={this.passwordChanged} />
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
      <div>
        {
          this.props.teams.map((team, i) => (
            <div key={i}>{team.name}</div>
          ))
        }
      </div>
    )
  }
})

export default connect(mapStateToProps)(MainPage)
