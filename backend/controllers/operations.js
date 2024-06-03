let entities = [
    { name: 'Entity1', coordinate: [-5, 10], labels: ['labelA', 'labelB', 'labelE'] },
    { name: 'Entity2', coordinate: [3, 6], labels: ['labelC', 'labelD'] },
    { name: 'Entity3', coordinate: [4, -1], labels: ['labelA', 'labelC'] }
];

// GET all entities
export const getEntities = (req, res) => {

    res.json(entities);

}

// CREATE new entity
export const createEntity = (req, res) => {
    
    entities.push(req.body);
    
    res.status(201).json(req.body);
  
}

// GET entity by name
export const getEntity = (req, res) => {
    
    const foundEntity = entities.filter((entity) => entity.name === req.params.name );
  
    if (foundEntity) {

        res.json(foundEntity);

    } else {

        res.status(404).send('Entity not found');
    
    }

}

// UPDATE entity
export const updateEntity = (req, res) => {
    const index = entities.findIndex(e => e.name === req.params.id);

    if (index !== -1) {

      entities[index] = req.body;

      res.json(req.body);
    
    } else {

      res.status(404).send('Entity not found');

    }

}

// DELETE entity
export const deleteEntity = (req, res) => {

    console.log('Delete entity request:', req.params.name);

    const { name } = req.params;

    entities = entities.filter(e => e.name !== name);

    res.status(204).send();

}

// POST QUERY
export const createQuery = (req, res) => {
    const { x1, y1, x2, y2 } = req.body;
    
    const result = entities.filter(({ coordinate: [x, y] }) =>
        x >= Math.min(x1, x2) && x <= Math.max(x1, x2) && 
        y >= Math.min(y1, y2) && y <= Math.max(y1, y2)
    );
    
    const labels = Array.from(new Set(result.flatMap(entity => entity.labels)));
    
    res.json({ entities: result.map(e => e.name), labels });

}