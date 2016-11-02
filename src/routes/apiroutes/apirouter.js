import express from 'express'
import authenticationRoutes from './authenticaten'
import messageRoutes from './messages'
import barberRoutes from './barbers'
import userRoutes from './users'

const APIRouter = express.Router();

APIRouter.use('/authenticate', authenticationRoutes);
APIRouter.use('/messages', messageRoutes);
APIRouter.use('/barber', barberRoutes);
APIRouter.use('/users', userRoutes);

export default APIRouter;
