import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEntity } from '../redux/actions';


const Form = ({ editEntity, onUpdate }) => {
  const [name, setName] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [labels, setLabels] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    if (editEntity) {
      setName(editEntity.name);
      setX(editEntity.coordinate[0]);
      setY(editEntity.coordinate[1]);
      setLabels(editEntity.labels.join(', '));
    }
  }, [editEntity]);


  const handleSubmit = e => {
    e.preventDefault();
    const entity = {
      name,
      coordinate: [parseFloat(x), parseFloat(y)],
      labels: labels.split(',').map(label => label.trim())
    };
    if (editEntity) {
      onUpdate(entity);
    } else {
      dispatch(addEntity(entity));
    }
    setName('');
    setX('');
    setY('');
    setLabels('');
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Name" 
        required 
        disabled={!!editEntity} 
      />
      <input 
        value={x} 
        onChange={e => setX(e.target.value)} 
        placeholder="X Coordinate" 
        required 
      />
      <input 
        value={y} 
        onChange={e => setY(e.target.value)} 
        placeholder="Y Coordinate" 
        required 
      />
      <input 
        value={labels} 
        onChange={e => setLabels(e.target.value)} 
        placeholder="Labels (comma separated)" 
      />
      <button type="submit">
        {editEntity ? 'Update Entity' : 'Add Entity'}
      </button>
    </form>
  );
};

export default Form;