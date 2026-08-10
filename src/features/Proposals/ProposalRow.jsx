/** @format */

import React from "react";
import Table from "../../ui/Table";
import { toPersianNumbers } from "../../utils/TopersianNumbers";
import TruncateText from "../../utils/TruncateText";
import { toPersianNumbersWithComma } from "../../utils/TopersianNumbers";

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

function ProposalRow({ proposal, index }) {
  const { status, description, duration, price } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{TruncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)}روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
