import mongoose, { Schema, model } from "mongoose";
import Company from './company/company.js';


// create schema
const clientSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema', required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    notification: { type: Number, required: true },//1.2.3
    companies: [{
        type: mongoose.Types.ObjectId, ref: 'Company',

        required: false
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

clientSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

export default model("Client", clientSchema);
