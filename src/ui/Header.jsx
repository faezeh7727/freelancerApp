/** @format */
import UserAvatar from "../features/authentications/UserAvatar";
import useUser from "../features/authentications/useUser";
import HeaderMenu from "./HeaderMenu";
export default function Header() {
  const { isloading, user } = useUser();

  return (
    <div
      className={`flex items-center gap-x-6
    ${isloading ?"blur-sm":""}`}
    >
      <HeaderMenu />
    </div>
  );
}
