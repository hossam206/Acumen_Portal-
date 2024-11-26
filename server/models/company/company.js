import mongoose from "mongoose"
import { DueDate, Placeholder, Director, Address, Document, BankDetail, RMdepartments } from './index.js'



        /**
         * {
         * 
 ,
  'Contact Person': 'jakub@acumenaccountants.co.uk',
  'Contact Phone': '7597785287',
  'Contact Email': 'jakub@acumenaccountants.co.uk',
  'Company Phone': '7597785287',
  'Registration Number': '14136313',
  'Auth Code': 'LA9V7M',
  'Registration Date': '',
  'CIS Registraion Number': '',
  '': '',
  'Employer PAYE Reference': '',
  'Accounts Office Reference': '',
  Status: 'ACTIVE',
  'Nature of Business': 'Freight rail transport',
  'Incorporation Date': '5/27/2022',
  'Accounting Reference Date': '31-May',
  'Corporation Tax (UTR)': '9870118255',
  'VAT Registered': '',
  'Vat Number': '',
  'Quarter 1 Due By': '',
  'Quarter 2 Due By': '',
  'Quarter 3 Due By': '',
  'Quarter 4 Due By': '',
  'Accounts Due By': '31-May',
  'Self assesment Due By': '',
  'Director Title': 'Mr ',
  'Director Name': 'Jakub LUBIENIECKI',
  'Director Date of Appointment': '5/27/2022',
  'Date of Resignation': '',
  'Date Registration for SE': '',
  'Director Date of Birth': '',
  'Director UTR': '',
  'Director UTR ID': '',
  'Director UTR Password': '',
  'Director NIN': 'SG885049B',
  'Business Address': 'Flat 52, Caspian View, Buckingham Road, Bletchley\nMILTON KEYNES, MK3 5JJ',
  'Registered Office Address': '15-17 Upper George Street, Luton, LU1 2RD',
  Phone: '7597785287',
  Website: '',
  'Contact Name': 'Mr Jakub LUBIENIECKI',
  'Contact Entry Date': '',
  'Bank Name': '',
  'Account Holder Name': '',
  'Account Number': '',
  'Sort code': '',
  Departments: ''*/




  
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




