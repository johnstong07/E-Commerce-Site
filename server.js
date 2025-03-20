// Add this to the top of each of your main JS files
// (like the one that handles your product page)

// TODO: Check if user is logged in
// 1. Get user data from localStorage
// 2. If user is not logged in, you could:
//    - Redirect to login page
//    - Display a login prompt
//    - Or just allow browsing without personalized features

// TODO: Update your UI to show logged-in status:
// 1. Display user name in header
// 2. Show "Log Out" button instead of "Log In"
// 3. Add a user profile link

// TODO: Add logout functionality
// 1. Create a function that clears user data from localStorage
// 2. Redirect to home or login page


// TODO: Import required modules
// 1. Import express
// 2. Import mongoose
// 3. Import dotenv to load environment variables


// Add this near your other imports at the top
// TODO: Import user routes


// TODO: Load environment variables
// Hint: Use dotenv.config()
otenv.config();

// TODO: Initialize Express app
// Hint: const app = express();
const app = express();
const port = 3000;

// TODO: Set up middleware
// 1. Express JSON parser 
// 2. Serve static files from the 'public' directory
app.use(express.json());

// Add this after your middleware setup
// TODO: Use the user routes with the path '/api'

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()
ongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message


// TODO: Start the server
// Use the PORT from your environment variables or default to 3000

