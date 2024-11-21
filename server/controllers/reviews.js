import mongoose from 'mongoose'; // Import mongoose for ObjectId validation
import review from './../models/reviews.js'; // Import the review model
import Teacher from '../models/users.js'; // Import the review model


// Search review by ID
export const getreview = async (req, res) => {
    try {
        const rev = await review.findById(req.params.id);
        if (!rev) {
            return res.status(404).json({ message: 'review not found' });
        }
        res.status(200).json(rev);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all reviews
export const getreviews = async (req, res) => {
    try {
        const reviews = await review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new review
export const addreview = async (req, res) => {
    try {

        const newreview = new review({
            userName: req.body.userName,
            position: req.body.position,
            rating: req.body.rating,
            review: req.body.review,

        });
        await newreview.save();
        res.status(201).json({ message: 'review added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update review by ID
export const updatereview = async (req, res) => {
    try {
        const updatedreview = await review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedreview) {
            return res.status(404).json({ message: 'review not found' });
        }
        res.status(200).json(updatedreview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete review by ID
export const deletereview = async (req, res) => {
    try {
        const result = await review.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'review not found' });
        }
        res.status(200).json({ message: 'review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



