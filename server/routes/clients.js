import express from "express";
import {
    getClient,
    getClientsCount,
    getClients,
    updateClient,
    deleteClient,
    addClient,
} from "../controllers/client.js";
import { authMiddleware, roleMiddleware } from "../middlewares/Middlewares.js";
export const clientRoute = express.Router();

clientRoute.get("/count", getClientsCount);
clientRoute.get("/:id", getClient);
clientRoute.get("/", getClients);
clientRoute.post("/", addClient);
clientRoute.put("/:id", updateClient);
clientRoute.delete("/:id", deleteClient);


export default clientRoute;