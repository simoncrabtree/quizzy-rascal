import { APP_INIT, LOGIN_SUCCESS } from '../../app/actions'

export default () => next => action => {
  switch (action.type) {
    case APP_INIT: {
      let token = localStorage.getItem("TEAM_TOKEN")
      if (token)
        next({ type: LOGIN_SUCCESS, response: { token: token } })
      break
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("TEAM_TOKEN", action.response.token)
      break
    }
  }
  next(action)
}
