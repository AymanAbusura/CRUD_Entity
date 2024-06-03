import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
  entities: []
};

const entityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENTITIES':
      return { ...state, entities: action.payload };
    case 'ADD_ENTITY':
      return { ...state, entities: [...state.entities, action.payload] };
    case 'UPDATE_ENTITY':
      return {
        ...state,
        entities: state.entities.map(e =>
          e.name === action.payload.name ? action.payload : e
        )
      };
    case 'REMOVE_ENTITY':
      return {
        ...state,
        entities: state.entities.filter(e => e.name !== action.payload)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entity: entityReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
