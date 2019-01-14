import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
  case FETCH_WEATHER:
  //never manipulate state (.push) instead create a new array and return it
  console.log("reducer_weather reached", action.payload)
    return [ action.payload.data, ...state ];
  }

  return state;
}
