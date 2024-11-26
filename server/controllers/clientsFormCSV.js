import Client from "../models/client.js"
import { deleteFileWithPath } from "../helpers/deleteFile.js"
import { readCsvAsync } from "../helpers/importFormCSV.js"
import User from "../models/user.js"
import { Company } from "../models/company/index.js"




export const importClientsFromCSV = async (req, res) => {
    try {
        const path = req.file.path
        // console.log(path)
        const results = await readCsvAsync(`./${path}`)


    for(i=0;i<=results.length;i++){

 
        // console.log(results[0]);
        const newUser = new User({
            userName:results[i].Email,
            userRole:'client'
        })


        const newCompany=new Company({
            companyName: results[i]['companyName'],
            contactName: results[i]['contactName'],
            phone: results[i]['phone'],
            entryDate: results[i]['entryDate'],
            registrationNumber: results[i]['registrationNumber'],
            AuthCode: results[i]['AuthCode'],
            CISRegistrationNumber: results[i]['CISRegistrationNumber'],
            AccountsOfficeReference: results[i]['AccountsOfficeReference'],
            natureOfBusiness: results[i]['natureOfBusiness'],
            accountingReferenceDate: results[i]['accountingReferenceDate'],
            registrationDate: results[i]['registrationDate'],
            employerPAYEReference: results[i]['employerPAYEReference'],
            status: results[i]['status'],
            incorporationDate: results[i]['incorporationDate'],
            corporationTax_UTR: results[i]['corporationTax_UTR'],
            VATRegistered: results[i]['VATRegistered'],
        })
        const newClient = new Client({
            userID: newUser._id,
            name:results[i]['Client Name'],
            email:results[i]['Email'],
            notification:1,
            companies:[newCompany._id]

        })


    }

       // console.log(results[0]['Client Name']);


        /**
         * {
  'Client Name': 'A LINE TRANSPORT LTD',
  Email: 'jakub@acumenaccountants.co.uk',
  'Company Name': 'A LINE TRANSPORT LTD',
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
  Departments: ''
}
         */

        //await Client.insertMany(results)





        deleteFileWithPath(path)

        res.status(200).json({ message: 'Successfully Imported!!' })
    } catch (e) {

        res.status(400).json({ Error: ` ${e.message}` })
    }



}

