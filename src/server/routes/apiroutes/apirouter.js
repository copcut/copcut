import express from 'express'
import authenticationRoutes from './authentication'
import messageRoutes from './messages'
import barberRoutes from './barbers'
import userRoutes from './users'

const APIRouter = express.Router();

APIRouter.use('/', authenticationRoutes);
APIRouter.use('/messages', messageRoutes);
APIRouter.use('/barbers', barberRoutes);
APIRouter.use('/users', userRoutes);

export default APIRouter;
