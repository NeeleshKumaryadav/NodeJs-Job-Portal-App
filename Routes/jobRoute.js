import express from 'express';
import userAuth from '../Middleware/authMiddleware.js';
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobsController } from '../Controller/jobController.js';


const router = express.Router();

//route.post(route,middleware,controller)
//create job post || post method
router.post('/create-job',userAuth,createJobController);

//get jobs || get method
router.get('/get-jobs',userAuth,getAllJobsController);

//update jobs  || patch 
router.patch('/update-job/:id',userAuth,updateJobsController);

//delete job || delete
router.delete('/delete-job/:id',userAuth,deleteJobController);


router.get('/job-stats',userAuth,jobStatsController);

export default router;