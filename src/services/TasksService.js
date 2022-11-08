import axios from "axios";
// import { Status, Todo, TodoDto } from "../interfaces/Todo";

const serverURL = 'http://localhost:8000'

export const getAllTasks = async () => {
  const response = await axios.get(`${serverURL}/todos`)
  const status = response.status;
  console.log("DEBUG:")
  console.log("    GET STATUS:", status);
  return response.data;
};

export const getTask = async (id) => {
  const response = await axios.get(`${serverURL}/todo/${id}`);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    GET STATUS:", status);
  return response.data;
}

export const createTask = async (taskName)=> {
  const task = {task : taskName}
  const response = await axios.post(`${serverURL}/todo`, task);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    CREATE STATUS:", status);
  return status;
}

export const updateTask = async (id, data) => {
  const response = await axios.put(`${serverURL}/todo/${id}`, data);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    UPDATE STATUS:", status);
  return status;
}

export const updateTaskStatus = async (id,isDone) => {
  const data = {'isDone' : `${!isDone}`}
  const response = await axios.put(`${serverURL}/todo/${id}`, data);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    UPDATE STATUS:", status);
  return status;
}

export const deleteTask = async (id) => {
  const response = await axios.delete(`${serverURL}/todo/${id}`);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    DELETE STATUS:", status);
  return status;
}