/** @format */

import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import NavMenuItem from "../../ui/NavMenuItem";
import { HiHome, HiBriefcase ,HiUser} from "react-icons/hi2";
import { BsCollection } from "react-icons/bs";
function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavMenuItem to="dashboard" label="داشبورد" icon={HiHome} />
        <NavMenuItem to="users" label="کاربران" icon={HiUser} />
        <NavMenuItem to="projects" label="پروژه‌ها" icon={HiBriefcase} />
        <NavMenuItem to="proposals" label="درخواست ها" icon={BsCollection} />
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
