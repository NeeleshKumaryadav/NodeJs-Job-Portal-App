import express from 'express';
import { testPostController } from '../Controller/testController.js';
import useAuth from '../Middleware/authMiddleware.js';

const router = express.Router();

//routes
router.post('/test-post',useAuth, testPostController);


export default router;