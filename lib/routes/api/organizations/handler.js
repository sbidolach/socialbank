const errors = require('lib/errors')
const { getProjects } = require('lib/processors/projects')
const googleMap = require('lib/external/google_map')
const { Org } = require('lib/models')
const logger = require('lib/logger')
const schema = require('./schema')

// get list of organizations
exports.findAllWithLocation = async function findAllWithLocation (req, res) {
  const orgList = await Org.find({status: 'active'}).exec()
  const organizations = orgList
    .filter(org => {
      return (org.location && org.location.lat && org.location.lng)
    })
    .map(org => {
      return {
        id: org.id,
        name: org.name,
        number: org.number,
        funds: '£0',
        icon: 'place',
        lat: org.location.lat,
        lng: org.location.lng,
        address: org.location.address,
        city: org.location.city,
        postcode: org.location.postcode
      }
    })

  return res.send(organizations)
}

// get list of organizations
exports.findByUserId = async (req, res) => {
  const organization = await Org.findOne({ users: req.user.id, status: 'active' }).exec()
  if (!organization) {
    return res.sendStatus(204)
  }

  return res.send({
    id: organization.id,
    name: organization.name,
    number: organization.number,
    isValid: organization.isValid,
    location: organization.location
  })
}

// get list of organizations
exports.create = async function create (req, res) {
  const { error, value } = schema.organization(req.body)
  if (error) {
    logger.error('validation errors', error)
    throw new errors.ValidationError('Invalid values. Please review the entered data.')
  }

  // get lat/lng from address
  let location = {
    lat: 0,
    lng: 0,
    address: value.address,
    postcode: value.postcode,
    city: value.city
  }

  const geocode = await googleMap.geocode(value.address, value.postcode, value.city)
  if (geocode && geocode.length > 0) {
    location.lat = geocode[0].geometry.location.lat
    location.lng = geocode[0].geometry.location.lng
  }

  // create org
  let organization = await Org.findOne({ users: req.user.id, status: 'active' }).exec()
  if (organization) {
    organization.name = value.name
    organization.number = value.number
    organization.location = location
  } else {
    const user = req.user
    organization = new Org({
      name: value.name,
      number: value.number,
      location: location,
      users: [user]
    })
  }

  await organization.save()

  return res.send({
    id: organization.id,
    name: organization.name,
    number: organization.number,
    isValid: organization.isValid,
    location: organization.location
  })
}

// get organization
exports.findById = async function findById (req, res) {
  const org = await Org.findOne({_id: req.params.id}).exec()
  if (!org) {
    return res.sendStatus(204)
  }

  const projects = await getProjects(org.id, 'public')
  return res.send({
    id: org.id,
    name: org.name,
    number: org.number,
    isValid: org.isValid,
    funds: '£0',
    icon: 'place',
    address: org.location.address,
    city: org.location.city,
    postcode: org.location.postcode,
    projects
  })
}
