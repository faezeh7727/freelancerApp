/** @format */

import http from "./HttpService";
//...rest=> status , projectId
export function changeproposalstatusApi({ ProposalId, ...rest }) {
  return http
    .patch(`/proposal/${ProposalId}`, rest)
    .then(({ data }) => data.data);
}
export function getproposalsApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

//creat proposal
export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
