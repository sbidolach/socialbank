const mailchimp = require('external/mailchimp')
const logger = require('logger')
const config = require('config')
const debug = require('debug')('sendUserEmailVerify')

module.exports = function sendUserEmailVerify (user, token) {
  const subject = 'SoTec Email Verification'
  const from = { email: config.support.email, name: config.support.name }
  const to = { email: user.email }
  const content = `Thank you for signing up for a SoTec account. You are just one step away from using your account.\n\n
    Please click on the following link, or paste this into your browser to complete the process:\n\n
    ${config.app.url}/verify/${token}\n\n
    If you did not request this, please ignore this email.\n`

  return mailchimp.sendTextMail(to, from, subject, content)
    .then((response) => {
      debug('response', response)
      logger.info('Password reset to', to)
    })
    .catch((error) => {
      logger.error(error)
      throw error
    })
}