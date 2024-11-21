import mongoose from "mongoose"
import { DueDate, Placeholder, Director, Address, Document, BankDetail, RMdepartments } from './index.js'



const companySchema = new mongoose.Schema({
  registrationNumber: String,
  AuthCode: String,
  CISRegistrationNumber: String,
  AccountsOfficeReference: String,
  natureOfBusiness: String,
  accountingReferenceDate: Date,
  companyName: String,
  registrationDate: Date,
  employerPAYEReference: String,
  status: String,
  incorporationDate: Date,
  corporationTax_UTR: String,
  VATRegistered: Boolean,
  dueDates: { type: mongoose.Schema.Types.ObjectId, ref: "DueDate" },
  shareholders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Placeholder" }],
  directors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }],
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  contactName: String,
  phone: String,
  entryDate: Date,
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  bankDetails: { type: mongoose.Schema.Types.ObjectId, ref: "BankDetail" },
  RMdepartments: { type: mongoose.Schema.Types.ObjectId, ref: "RMdepartments" },
});

export default mongoose.model("Company", companySchema);




