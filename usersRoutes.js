// TODO: Import express and your User model
import express from 'express'
// TODO: Create an express router
const router = express.Router()
// TODO: Create POST route for user registration (/api/users/register)
// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201

// POST route for user registration
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' }); // User already registered
        }

        // Hash the password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save it to the database
        const newUser = new User({
            email,
            password: hashedPassword, // Store the hashed password
        });
        await newUser.save(); // Save user to the database

        // Respond with the newly created user information (excluding password)
        return res.status(201).json({
            email: newUser.email,
            id: newUser._id,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' }); // Handle server errors
    }
});



// TODO: Create POST route for user login (/api/users/login)
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' }); // User not found
        }

        // Check if the provided password matches the stored hash
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' }); // Password mismatch
        }

        // Respond with user information (excluding password)
        return res.status(200).json({
            email: user.email,
            id: user._id,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' }); // Handle server errors
    }
});


// TODO: Export the router
module.exports = router;