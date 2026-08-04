/** @format */

import http from "./HttpService";

export default function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
