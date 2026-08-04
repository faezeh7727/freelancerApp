/** @format */

import http from "./HttpService";

export function changeproposalstatusApi({id,data}) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}
