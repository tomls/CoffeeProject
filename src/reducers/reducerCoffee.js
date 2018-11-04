import * as types from '../actions/actionTypes';

const defaultState = 
{
    coffees: [
        // { 'id': 1, 'name': 'Coffee1', 'price': 3.25 },
        // { 'id': 2, 'name': 'Coffee2', 'price': 4.25 },
        // { 'id': 3, 'name': 'Coffee3', 'price': 5.25 },
    ]
}

export default function coffeesReducer (state = defaultState.coffees, action) {
    switch(action.type) { 
        case types.LOAD_COFFEES_SUCCESS:
            return action.coffees;
        case types.CREATE_COFFEE_SUCCESS:
            return [...state, action.newCoffee];
        case types.DELETE_COFFEE_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfCoffeeToDelete = state.findIndex(coffee => {return coffee.id == action.deleteId})
            newState.splice(indexOfCoffeeToDelete, 1);
            return newState; 
        }
        default: 
        return state;
    }
}