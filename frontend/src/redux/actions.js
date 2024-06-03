import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3001/entities';

export const setEntities = entities => ({

  type: 'SET_ENTITIES',

  payload: entities

});

export const fetchEntities = () => async dispatch => {

  try {

    const response = await axios.get(API_URL);

    dispatch(setEntities(response.data));

  } catch (error) {

    console.error('Error fetching entities:', error);

  }

};

export const addEntity = entity => async dispatch => {

  try {
    
    const response = await axios.post(API_URL, entity);

    dispatch({ type: 'ADD_ENTITY', payload: response.data });

    toast.success('Entity added successfully');

  } catch (error) {

    console.error('Error adding entity:', error);

  }

};

export const getEntityByName = name => async dispatch => {

  try {

    const response = await axios.get(`${API_URL}?name=${name}`);

    dispatch({ type: 'GET_ENTITY_BY_NAME', payload: response.data });

    return response.data;

  } catch (error) {

    console.error('Error fetching entity by name:', error);

    return null;

  }

};

export const updateEntity = entity => async dispatch => {

  try {

    const fetchedEntity = await dispatch(getEntityByName(entity.name));

    if (fetchedEntity) {

      const response = await axios.put(`${API_URL}/${fetchedEntity[0].id}`, entity);

      dispatch({ type: 'UPDATE_ENTITY', payload: response.data });

      toast.success('Entity updated successfully');

    } else {

      toast.error('Entity not found');

    }
  } catch (error) {

    console.error('Error updating entity:', error);

  }

};

export const removeEntity = name => async (dispatch, getState) => {

  try {

    const fetchedEntity = await dispatch(getEntityByName(name));

    if (fetchedEntity[0]) {

      await axios.delete(`${API_URL}/${fetchedEntity[0].id}`);

      dispatch({ type: 'REMOVE_ENTITY', payload: fetchedEntity[0].id });

      toast.success('Entity deleted successfully');

      dispatch(fetchEntities());

    } else {

      toast.error('Entity not found'); 

    }
  } catch (error) {

    console.error('Error removing entity:', error);

  }

};

export const queryEntities = rectangle => async dispatch => {

  try {

    const { x1, y1, x2, y2 } = rectangle;

    const response = await axios.post(`${API_URL}/query`, { x1, y1, x2, y2 });

    return { entities: response.data.entities, labels: response.data.labels };

  } catch (error) {

    console.error('Error querying entities:', error);

  }

};