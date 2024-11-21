import mongoose from 'mongoose';

const emailLogSchema = new mongoose.Schema({
    emailedTo: { type: String, required: true }, // Recipient email address
    emailSubject: { type: String, required: true }, // Subject of the email
    clientName: { type: String, required: true }, // Client name
    companyName: { type: String, required: true }, // Company name
    date: { type: Date, required: true, default: Date.now }, // Date when the email was sent
    deadline: { type: Date, required: true }, // Deadline for the task or action
    period: { type: String, required: true }, // Period for the task (e.g., "monthly", "quarterly")
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

export default mongoose.model('EmailLog', emailLogSchema);
