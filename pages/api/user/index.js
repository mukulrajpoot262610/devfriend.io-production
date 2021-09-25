import nc from 'next-connect'
import connectDB from '../../../config/db';

import { getAllUser } from '../../../controllers/userController'

const handler = nc();

connectDB();

handler.get(getAllUser)

export default handler