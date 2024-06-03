import express from 'express'

import { getEntities, createEntity, getEntity, updateEntity, deleteEntity, createQuery } from '../controllers/operations.js'

const router = express.Router();

// GET all entities
router.get('/entities', getEntities);

// POST a new entity
router.post('/entities', createEntity);

// GET ENTITY BY NAME
router.get('/entities/:name', getEntity);

// PUT update an existing entity
router.put('/entities/:name', updateEntity);

// DELETE an existing entity
router.delete('/entities/:name', deleteEntity);

// POST Query
router.post('/entities/query', createQuery);

export default router;