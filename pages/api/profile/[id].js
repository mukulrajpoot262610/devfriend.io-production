import nc from 'next-connect'
import connectDB from '../../../config/db';

import { GetProfile } from '../../../controllers/profileController'

const handler = nc();

connectDB();

handler.get(GetProfile)


export default handler