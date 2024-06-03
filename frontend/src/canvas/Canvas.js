import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const EntityCanvas = () => {
  const canvasRef = useRef(null);
  const entities = useSelector(state => state.entity.entities);

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    entities.forEach(({ coordinate: [x, y] }) => {

      ctx.beginPath();

      ctx.arc(x + canvas.width / 2, y + canvas.height / 2, 5, 0, 2 * Math.PI);

      ctx.fill();

    });

  }, [entities]);

  return <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid black' }} className='canvas' />;
  
};

export default EntityCanvas;
