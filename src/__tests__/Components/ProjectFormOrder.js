import * as actions from '../../Redux/actions'
import reducer from '../../Redux/reducer'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const price = 1
    const expectedAction = {
      type: 'ADD_TO_ORDERER',
      price
    }
    expect(actions.addToOrderer(price)).toEqual(expectedAction)
  })
})



describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0)
  })
  
  })
