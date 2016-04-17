import 'isomorphic-fetch'

const headers = () => {
  return {
    'Accept':        'application/json',
    'Content-Type':  'application/json',
    'QuizmasterToken': localStorage.getItem("QUIZMASTER_TOKEN")
  }
}

const status = (response) =>
  (response.ok)
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText))

const convertToJson = (response) => {
  return (response.status === 204) ? {} : response.text().then((text) => {
    try {
      return JSON.parse(text)
    } catch (e) {
      return { data: text }
    }
  })
}

export const API_CALL = 'API_CALL'

export default store => next => action => {
  if (action.type !== API_CALL)
    return next(action)

  let endpoint = action.endpoint

  if (action.onRequest)
    next({
      type: action.onRequest,
      request: action
    })

  return fetch(endpoint, {
    method: action.method || 'get',
    headers: headers(store),
    body:    JSON.stringify(action.body)
  })
  .then(status)
  .then(convertToJson)
  .then(json => {
    if (action.onSuccess)
      next({
        type: action.onSuccess,
        response: json,
        request: action
      })
  })
  .catch(error => {
    if (action.onFailure)
      next({
        type: action.onFailure,
        error: error.message || 'Something bad happened',
        request: action
      })
  })
}
