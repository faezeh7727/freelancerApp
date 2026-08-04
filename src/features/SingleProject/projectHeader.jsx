/** @format */

import { HiArrowRight } from "react-icons/hi2";
import UseMoveBack from "../../hooks/useMoveBack";

export default function ProjectHeader({ project }) {
 const Moveback=UseMoveBack()
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={Moveback}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-secondary transition-colors hover:bg-primary-light hover:text-white"
      >
        <HiArrowRight className="h-5 w-5" />
      </button>

      <h2 className=" p-1.5 rounded-md bg-second-primary text-md font-bold text-secondary">{project?.title}</h2>
    </div>
  );
}
