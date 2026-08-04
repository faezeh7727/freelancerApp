/** @format */
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
export default function Logout() {
  const { logout, isPending } = useLogout();
  if (isPending) return <Loading />;
  return (
    <button
      onClick={() => logout()}
      className="flex items-center gap-3 w-full text-red-500"
    >
      <HiOutlineArrowRightOnRectangle className="w-5 h-5" />
      <span>خروج</span>
    </button>
  );
}
