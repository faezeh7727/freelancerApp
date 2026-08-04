/** @format */

import http from "./HttpService";

//get otp
export const GetOtp = (data) =>
  http
    .post("/user/get-otp", data)
    .then(({ data }) => data.data);

//check otp
export const CheckOtp = (data) =>
  http.post("/user/check-otp", data)
.then(({ data }) => data.data);

//complete profile

export const CompleteProfile = (data) =>
  http.post("/user/complete-profile", data)
.then(({ data }) => data.data);

//get user
export const GetUser = (data) =>
  http.get("/user/profile", data)
.then(({ data }) => data.data);

//log out
export const LogoutApi = () =>
  http.post("/user/logout")
.then(({ data }) => data.data);


