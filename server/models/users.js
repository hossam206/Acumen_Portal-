

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    userRole: {
        type: String,
        enum: [
            'admin',
            'accountant',
            'client'
        ],
        required: true
    },
    userID: {
        type: String,
        required: true,
        default: function () {
            return this.generateTID();
        }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: {
        type: Date, default: Date.now
    },

});


userSchema.methods.generateTID = function () {
    // Generate a 3-digit number (e.g., between 1000 and 9999)
    return Math.floor(Math.random() * 9000) + 100;
};

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export default model('users', userSchema);



// add user generate class id for the user

// delete user

// update user

// get the number of users