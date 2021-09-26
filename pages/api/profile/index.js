import nc from 'next-connect'
import connectDB from '../../../config/db';

import { GetAllProfile, CreateProfile } from '../../../controllers/profileController'

const handler = nc();

connectDB();

handler.get(GetAllProfile)

handler.post(CreateProfile)

export default handler