/** @format */

export default function getRedirectPathByRole(user) {
  if (!user) return "/auth";

  if (!user.isActive || user.status === 0) {
    return "/complete-profile";
  }

  if (user.status === 1) {
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
