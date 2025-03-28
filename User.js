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



// TODO: Import mongoose
import mongoose from 'mongoose';

// TODO: Create a user schema with the following fields:
// - firstName (String, required)
// - lastName (String, required)
// - email (String, required, unique)
// - password (String, required)
// - address:
//   - street (String, required)
//   - apartment (String, optional)
//   - city (String, required)
//   - state (String, required)
//   - zipCode (String, required)
// TODO: Create a user schema with the specified fields
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      apartment: {
        type: String,
        required: false // optional field
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipCode: {
        type: String,
        required: true
      }
    }
  });
  
  // TODO: Create and export the User model
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;



