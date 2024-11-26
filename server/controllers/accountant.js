import User from "../models/user.js";
import Accountant from "../models/accountants.js"; // Import the Accountant model
import { sendEmail } from "../helpers/emailSender.js";

// Get a Accountant by ID
export const getAccountant = async (req, res) => {
  try {
    const accountant = await Accountant.findById(req.params.id);
    if (!accountant) {
      return res.status(404).json({ message: "Accountant not found" });
    }
    res.status(200).json(accountant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all accountant
export const getAccountants = async (req, res) => {
  try {
    const accountants = await Accountant.find();
    res.status(200).json(accountants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new accountant
export const addAccountant = async (req, res) => {
  try {
    //console.log(req);


    const password = Math.floor(Math.random() * 100000000000)

    const User = await new User({
      userName: req.body.email,
      password: password,
      userRole: 'accountant'

    })
    const newUser = await User.save();

    const newAccountant = new Accountant({
      userID: newUser._id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      department: req.body.department

    });


    await sendEmail(
      'Accumen portal New User Notification!',
      `Hello ${req.body.name}, `,
      req.body.email,
      `
        these are your credintials to ACCUMEN PORTAL :
        EMAIL: ${req.body.email}
        Password: ${password} 


        Thank you
        accumen portal team.
       `
    )

    const ans = await newAccountant.save();

    res.status(201).json(ans.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a accountant by ID
export const deleteAccountant = async (req, res) => {
  try {
    const result = await Accountant.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Accountant not found" });
    }
    res.status(200).json({ message: "Accountant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a accountant by ID
export const updateAccountant = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you use ID to find the accountant
    const updatedAccountant = await Accountant.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAccountant) {
      return res.status(404).json({ message: "Accountant not found!!" });
    }
    res.status(200).json(updatedAccountant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get the number of accountant
export const getAccountantsCount = async (req, res) => {
  try {
    const count = (await Accountant.countDocuments()) - 1;
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
