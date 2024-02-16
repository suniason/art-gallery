function storeToken(token) {
  localStorage.setItem('access_token', token)
}

function storeUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function getToken() {
  return `Bearer ${localStorage.getItem('access_token')}`
}

function getUser() {
  return JSON.parse(localStorage.getItem('user'))
}

function checkToken() {
  return localStorage.getItem('access_token') !== null ? true : false
}
function checkUser() {
  return localStorage.getItem('user') !== null ? true : false
}

function removeToken() {
  localStorage.removeItem('access_token')
}

function removeUser() {
  localStorage.removeItem('user')
}

export {
  storeToken,
  getToken,
  removeToken,
  storeUser,
  getUser,
  checkToken,
  removeUser,
  checkUser,
}
