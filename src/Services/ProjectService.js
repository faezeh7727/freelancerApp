/** @format */
import { data } from "react-router-dom";
import http from "./HttpService";
//get owner project

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
//creat project
export function createProjectApi(data) {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
}


export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function ToggleProjectStatusApi({ id, data }) {
  return http
    .patch(`/project/change-status/${id}`, data)
    .then(({ data }) => data.data);
}

//get single project
export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

//get all projects
export function getProjectsApi() {
  return http.get(`/project/list`).then(({ data }) => data.data);
}


