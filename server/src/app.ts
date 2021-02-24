import express from 'express';
import cors from 'cors';

import dynamicRoutesRouter from './routes/dynamic-routes';
import campaignsRouter from './routes/campaigns';
import usersRouter from './routes/users';
import tableCofigsRouter from './routes/table-configs';

const app = express();
const PORT = 3001;

const corsOptions = { origin: 'http://localhost:3000' }
app.use(cors(corsOptions));

app.use('/api/dynamic-routes', dynamicRoutesRouter);
app.use('/api/campaigns', campaignsRouter);
app.use('/api/users', usersRouter);
app.use('/api/table-configs', tableCofigsRouter);

app.listen(PORT, () =>
  console.log(`App is running on port ${PORT}`)
);