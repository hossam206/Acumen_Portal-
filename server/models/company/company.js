import mongoose from "mongoose"
import { DueDate, Shareholder, Director, Address, Document, BankDetail, RMdepartment } from './index.js'







const companySchema = new mongoose.Schema({
  contactName: String,
  phone: String,
  entryDate: Date,
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
  shareholders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shareholder" }],
  directors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }],
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },

  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Document" }],
  bankDetails: { type: mongoose.Schema.Types.ObjectId, ref: "BankDetail" },
  RMdepartments: { type: mongoose.Schema.Types.ObjectId, ref: "RMdepartments" },
});

export default mongoose.model("Company", companySchema);




