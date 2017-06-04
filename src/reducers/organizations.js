import { RECEIVE_ORGANIZATIONS } from '../constants/ActionTypes'

export const organizations = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ORGANIZATIONS:
      return (action.organizations) ? action.organizations : state
    default:
      return state
  }
}
