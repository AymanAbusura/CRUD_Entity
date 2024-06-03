import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEntities, removeEntity, updateEntity } from '../redux/actions';
import Form from './Form';

import { Pencil, Trash } from 'react-bootstrap-icons';


const List = () => {
  const dispatch = useDispatch();
  const entities = useSelector(state => state.entity.entities);
  const [editEntity, setEditEntity] = useState(null);

  useEffect(() => {
    dispatch(fetchEntities());
  }, [dispatch]);

  const handleEdit = entity => {
    setEditEntity(entity);
  };

  const handleUpdate = updatedEntity => {
    dispatch(updateEntity(updatedEntity));
    setEditEntity(null);
  };

  return (
    <div className="entity-list">
      <Form editEntity={editEntity} onUpdate={handleUpdate} />
      <ul>
        {entities.map(entity => (
          <li key={entity.name}>
            <p>{entity.name}</p> 
            <p>({entity.coordinate.join(', ')})</p> 
            <p>{entity.labels.join(', ')}</p>
            <div>
              <button className="edit-button" onClick={() => handleEdit(entity)}>
                <div>
                  <Pencil /> Edit
                </div>
              </button>
              <button className="remove-button" onClick={() => dispatch(removeEntity(entity.name))}>
                <div>
                  <Trash /> Remove
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;