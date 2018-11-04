import * as types from './actionTypes';
import CoffeeAPI from '../API/CoffeeAPI';

export function loadCoffeesSuccess(coffees) {
  return {type: types.LOAD_COFFEES_SUCCESS, coffees};
}

export function CreateCoffeeSuccess(newCoffee) {
  return {type: types.CREATE_COFFEE_SUCCESS, newCoffee};
}

export function DeleteCoffeeSuccess(deleteId) {
  return {type: types.DELETE_COFFEE_SUCCESS, deleteId};
}
