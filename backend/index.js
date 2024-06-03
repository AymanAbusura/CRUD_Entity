import express from 'express'
import cors from 'cors'

import entitiesRoutes from './routes/entities.js'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', entitiesRoutes);

app.get('/', (req, res) => res.send('Hello from the backend server!'));
app.get("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// import express from 'express';
// import cors from 'cors';
// import {
//     getEntities,
//     createEntity,
//     updateEntity,
//     deleteEntity,
//     getEntity,
//     createQuery
// } from './controllers/operations.js';

// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// app.get('/entities', getEntities);
// app.post('/entities', createEntity);
// app.get('/entities/:name', getEntity);
// app.put('/entities/:name', updateEntity);
// app.delete('/entities/:name', deleteEntity);
// app.post('/entities/query', createQuery);

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
