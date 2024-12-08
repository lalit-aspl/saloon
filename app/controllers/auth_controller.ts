import { HttpContext } from '@adonisjs/core/http';
const { default: User } = await import('#models/user'); // Adjust the path as necessary

export default class AuthController {

    async register({ request, response }) {
        try {
            const userData = request.only(['username', 'email', 'password']); // Log the user data array
            console.log('User Data:', userData);
    
            // Create a new user record
            const user = await User.create(userData);
    
            // Return a successful response with the user data
            return response.status(201).json({
                message: 'User registered successfully',
                data: user,
            });
        } catch (error) {
            // Handle errors and return an appropriate response
            return response.status(400).json({
                message: 'Failed to register user',
                error: error.message,
            });
        }
    }
    
    
}