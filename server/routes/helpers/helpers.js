
import { importClientsFromCSV } from "../../controllers/clientsFormCSV.js";
import { upload } from "../../config/multer.js";

import { Router } from 'express';

const helpersRoute = new Router()

//helpersRoute.use('/helpers',importClientRoute)
helpersRoute.post('/importCSV', upload.single('clients'), importClientsFromCSV)


export default helpersRoute

