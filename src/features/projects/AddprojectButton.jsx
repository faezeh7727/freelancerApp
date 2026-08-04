/** @format */

import { useState } from "react";
import Modal from "../../ui/Modal";
import CreatProjectForm from "./creatProjectForm";

export default function AddProject() {
  const [addproject, setAddproject] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center justify-between pb-5">
      <div className="flex  items-center">
        <h1 className="font-bold text-lg ">پروژه های شما</h1>
        <img
          className="w-9 h-9"
          src="/public/images/plan-list-svgrepo-com.svg"
          alt="project"
        />
      </div>
      <div className="md:pl-7 text-white">
        <button
          onClick={() => setAddproject(true)}
          className="flex  items-center btn-secondary shadow-2xs"
        >
          اضافه کردن پروژه
          <img
            className="w-9"
            src="/public/images/add-wallet-svgrepo-com.svg"
            alt=""
          />
        </button>
        <Modal
          open={addproject}
          title="اضافه کردن پروژه"
          onClose={() => setAddproject(false)}
        >
          <CreatProjectForm onClose={()=>setAddproject(false)}/>
        </Modal>
      </div>
    </div>
  );
}
