import { combineReducers } from 'redux';
import CoffeeReducer from './reducerCoffee'

const rootReducer = combineReducers({
    coffees: CoffeeReducer,
})

export default rootReducer