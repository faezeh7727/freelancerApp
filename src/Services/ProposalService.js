/** @format */

import http from "./HttpService";

export function changeproposalstatusApi({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}
export function getproposalsApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

//creat proposal
export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}


