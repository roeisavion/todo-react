import axios from "axios";
const serverURL = 'http://localhost:8000'

export const getAllTasks = async () => {
  const response = await axios.get(`${serverURL}/Tasks`)
  return response.data;
};

export const getTask = async (id) => {
  const response = await axios.get(`${serverURL}/Task/${id}`);
  return response.data;
}

export const createTask = async (taskname)=> {
  const task = {taskname}
  const response = await axios.post(`${serverURL}/Task`, task);
  const status = response.status;
  return status;
}

export const updateTask = async (id, data) => {
  const response = await axios.put(`${serverURL}/Task/${id}`, data);
  const status = response.status;
  return status;
}

export const updateTaskStatus = async (id,isdone) => {
  const data = {'isdone' : `${!isdone}`}
  const response = await axios.put(`${serverURL}/Task/${id}`, data);
  const status = response.status;
  return status;
}

export const deleteTask = async (id) => {
  const response = await axios.delete(`${serverURL}/Task/${id}`);
  const status = response.status;
  return status;
}

export const backupToMongo = async (id) => {
  const response = await axios.post(`${serverURL}/Backup`);
  const status = response.status;
  return status;
}