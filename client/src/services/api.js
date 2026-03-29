import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const createExpense = (data) => API.post("/expenses", data);
export const getExpenses = () => API.get("/expenses");