import User from "../models/user.js";
import Client from "../models/clients.js"; // Import the Client model
import { sendEmail } from "../helpers/emailSender.js";
import company from "../models/company/company.js";
import { Company } from "../models/company/index.js";

// Get a Client by ID
export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all client
export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new client
export const addClient = async (req, res) => {
    try {
        //console.log(req);


        const password = Math.floor(Math.random() * 100000000000)

        const User = await new User({
            userName: req.body.email,
            password: password,
            userRole: 'client'

        })
        const newUser = await User.save();




        const company = new Company({
            companyName: `default company for client ${req.body.name} `
        })
        const newCompany = await company.save();



        const newClient = new Client({
            userID: newUser._id,
            name: req.body.name,
            email: req.body.email,
            Notification: req.body.phone,
            company: [newCompany._id]

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


        const clientData = await newClient.save();

        res.status(201).json(clientData.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a client by ID
export const deleteClient = async (req, res) => {
    try {
        const result = await Client.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a client by ID
export const updateClient = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you use ID to find the client
        const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedClient) {
            return res.status(404).json({ message: "Client not found!!" });
        }
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get the number of client
export const getClientsCount = async (req, res) => {
    try {
        const count = (await Client.countDocuments()) - 1;
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
