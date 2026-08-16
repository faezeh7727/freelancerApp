/** @format */

export default function getRedirectPathByRole(user) {
  if (!user) return "/auth";

  if (!user.role || !user.isActive) {
    return "/complete-profile";
  }
  

  const role = user.role?.toUpperCase();

  switch (role) {
    case "ADMIN":
      return "/admin";
    case "OWNER":
      return "/owner";
    case "FREELANCER":
      return "/freelancer";
    default:
      return "/";
  }
}
