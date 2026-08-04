/** @format */

import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/TopersianNumbers";
import TolocalDateShort from "../../utils/TolocalDateShort";
import TruncateText from "../../utils/TruncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/confirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreatProjectForm from "../projects/creatProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";

export default function ProjectRow({ project, index }) {
  const [isEditOpen, setisEditOpen] = useState(false);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{TruncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{TolocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--primary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus
         project={project}
        />
      </td>
      <td >
        <button onClick={() => setisEditOpen(true)}>
          <img
            className="w-5 ml-3"
            src="/public/images/pencil-edit-office-2-svgrepo-com.svg"
            alt="edit"
          />
        </button>
        <Modal
          open={isEditOpen}
          title={`ویرایش ${project.title}`}
          onClose={() => setisEditOpen(false)}
        >
          <CreatProjectForm
            projectToEdit={project}
            onClose={() => setisEditOpen(false)}
          />
        </Modal>
        <button onClick={() => setisDeleteOpen(true)}>
          <img
            className="w-6 mt-1"
            src="/public/images/trash-bin-2-svgrepo-com.svg"
            alt="trash"
          />
        </button>
        <Modal
          open={isDeleteOpen}
          title={`حذف ${project.title}`}
          onClose={() => setisDeleteOpen(false)}
        >
          <ConfirmDelete
            resourcename={project.title}
            onClose={() => setisDeleteOpen(false)}
            onConfirm={() =>
              removeProject(project._id, {
                onSuccess: (data) => setisDeleteOpen(false),
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
      <td className="align-middle text-center  ">
        <Link to={project._id}>
        <HiEye className="w-5 h-5 text-gray-500" />
        </Link>
      </td>
    </Table.Row>
  );
}
