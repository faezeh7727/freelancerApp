/** @format */

import React, { useState } from "react";
import Table from "../../../ui/Table";
import TruncateText from "../../../utils/TruncateText";
import { toPersianNumbersWithComma } from "../../../utils/TopersianNumbers";
import TolocalDateShort from "../../../utils/TolocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreatProposal from "../../Proposals/CreatProposal";
const Projectstatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setopen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{TruncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{TolocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${Projectstatus[status].className}`}>
          {Projectstatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setopen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreatProposal 
          onClose={() => setopen(false)} 
          projectId={project._id}/>
        </Modal>
        <button onClick={() => setopen(true)}>
          <MdAssignmentAdd className="w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
