/** @format */

import useUser from "./useUser";
export default function UserAvatar() {
  const { user } = useUser();

  return (
    <>
      <img
        src="/images/user.jpg"
        alt="user"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="text-sm text-label-secondary">
        <p className="font-bold pb-1">{user?.name}</p>
        <p >{user?.phoneNumber}</p>
      </div>
    </>
  );
}
