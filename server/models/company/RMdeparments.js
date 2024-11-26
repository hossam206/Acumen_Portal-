import mongoose from "mongoose";

const RMdepartmentsSchema = new mongoose.Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  departmentName: [{
    type: String,

    required: true,
    unique: true, // Ensures no duplicate department names
  }],
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("RMdepartments", RMdepartmentsSchema);
