class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated () {
    return localStorage.getItem('user') !== null
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser () {
    localStorage.removeItem('user')
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getUser () {
    const user = localStorage.getItem('user')
    return JSON.parse(user)
  }
}

export default Auth
