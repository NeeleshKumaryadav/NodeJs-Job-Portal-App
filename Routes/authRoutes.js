import express from 'express';
import { authController, loginController } from '../Controller/authController.js';

//route object
const router = express.Router();

//routes

/** 
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         - firstName
*         - lastName
*         - email
*         - password
*       properties:
*         id:
*           type: string
*           description: The auto-generated id of user collection
*         firstName:
*           type: string
*           description: User first name
*         lastName:
*           type: string
*           description: User last name
*         email:
*           type: string
*           description: User Email Address
*         password:
*           type: string
*           description: User password should be greater than 6
*         location:
*           type: string
*           description: User location
*       example:
*         id: DEGH7GQ
*         firstName: Alice
*         lastName: joseph
*         email: alice@gmail.com
*         password: funTime
*         location: India
*/

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: authentication apis
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: register new user
 *     tags:
 *       - Auth
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: user created successfully
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: internal server error
 */



//post route for register
router.post('/register',authController);


//same api-documentation is done for login using swagger


//post route for login
router.post('/login',loginController)

export default router;