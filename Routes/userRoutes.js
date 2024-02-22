import express from 'express';
import userAuth from '../Middleware/authMiddleware.js';
import { updateUserController } from '../Controller/userController.js';

//route object
const router = express.Router();

// get 
router.get('/get-user')


//update user by post request

router.post('/update-user', userAuth , updateUserController);

export default router;