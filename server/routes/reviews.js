import express from "express";
import {
  getreview,
  getreviews,
  addreview,
  updatereview,
  deletereview,
} from "./../controllers/reviews.js";



export const reviewsRoute = express.Router();

reviewsRoute.get("/review/:id", getreview);
reviewsRoute.get("/reviews", getreviews);
reviewsRoute.post("/review", addreview);
reviewsRoute.put("/review/:id", updatereview);
reviewsRoute.delete("/review/:id", deletereview);


export default reviewsRoute;

