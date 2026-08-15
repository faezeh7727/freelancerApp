/** @format */

import React, { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus.";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: " در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success ",
  },
];

function UserRow({ user, index }) {
  const [open, setopen] = useState(false);
  const { status } = user;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setopen(false)}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setopen(false)} />
        </Modal>
        <button className="btn-primary p-1" onClick={() => setopen(true)}>
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
