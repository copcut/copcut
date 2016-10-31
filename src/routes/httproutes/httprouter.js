import express from 'express'

import authenticationRoutes from './authentication'
import messageRoutes from './messages'
import barberRoutes from './barbers'

const HTTPRouter = express.Router();
HTTPRouter.use('/', authenticationRoutes);
HTTPRouter.use('/messages', messageRoutes);
HTTPRouter.use('/barber', barberRoutes);

export default HTTPRouter;
