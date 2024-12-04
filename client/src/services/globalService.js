import axios from "axios";
const api = import.meta.env.VITE_API_URLL;
// Centralized error handling function
const handleError = (error, action) => {
  throw new Error(`Sorry Error is ${action} : ${error.message} `);
};
// Generic API call
const apiCall = async (method, path, data = null) => {
  try {
    const response = await axios({ method, url: `${api}/${path}`, data });
    return response.data;
  } catch (error) {
    handleError(error, method);
  }
};

// get All Items
const getAllItems = (path) => {
  return apiCall("GET", path);
};

// get One Item
const getItem = (path, itemId) => {
  return apiCall("GET", `${path}/${itemId}`);
};
// get Count
const getCount = () => {
  return apiCall("GET", `${path}/count`);
};
// add Item
const addItem = (path, data) => {
  return apiCall("POST", path, data);
};
// update Item
const updateItem = (path, itemId, data) => {
  return apiCall("PUT", `${path}/${itemId}`, data);
};
// delete Item
const deleteItem = (path, itemId) => {
  return apiCall("DELETE", `${path}/${itemId}`);
};
