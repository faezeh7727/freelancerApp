/** @format */

import React from "react";
import useproposals from "./useProposals";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
function ProposalTabel() {
  const { isLoading, proposals } = useproposals();
  if (isLoading) return <Loading />;
  if (!proposals?.length) return
  <Empty resourceName="پروپوزال" />;
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTabel;
