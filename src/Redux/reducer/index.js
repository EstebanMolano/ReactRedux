import { combineReducers } from 'redux';
import { showProducts } from './products';
import { addToOrderer } from './ordereres';


const rootReducer = combineReducers({
  product : showProducts,
  orderer : addToOrderer
});

export default rootReducer;