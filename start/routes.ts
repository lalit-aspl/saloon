/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
//import AuthController from '#controllers/auth_controller'
const AuthController = () => import('#controllers/auth_controller')
const DashboardController = () => import('#controllers/dashboard_controller')

router.get('/register', async ({ inertia }) => {    
    //return inertia.render('Register') 
    return inertia.render('auth/register')

})
router.post('register', [AuthController, 'register'])
router.get('dashboard', [DashboardController, 'dashboard'])


router.on('/').renderInertia('home')
// Authentication routes
