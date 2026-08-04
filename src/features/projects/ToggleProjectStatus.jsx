/** @format */

import { useState } from "react";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";

export default function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN";

  const { isUpdating, UpdateProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";

    UpdateProjectStatus({
      id: project._id,
      data: { status },
    });
  };

  return (
    <div>
      {isUpdating ?
        <Loading height={20} width={40} />
      : <Toggle
          enabled={enabled}
          onChange={toggleHandler}
          activeText="باز"
          inactiveText="بسته"
        />
      }
    </div>
  );
}
