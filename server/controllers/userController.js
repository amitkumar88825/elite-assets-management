const User = require('../models/User');

// Fetch all users
const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Add a new user
const addUser = async (req, res) => {
    try {
        console.log('Add User Method Called');
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create user', details: error.message });
    }
};

// Update an existing user
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const user = await User.findByIdAndUpdate(userId, updatedData, {
            new: true, // Returns the updated document
            runValidators: true, // Ensures validation rules are applied
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update user', details: error.message });
    }
};

// Delete a user
const removeUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete user', details: error.message });
    }
};

module.exports = {
    getUser,
    addUser,
    updateUser,
    removeUser,
};
