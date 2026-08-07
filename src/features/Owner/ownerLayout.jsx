/** @format */

import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import NavMenuItem from "../../ui/NavMenuItem";
import { HiHome, HiBriefcase} from "react-icons/hi2";
function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavMenuItem to="/owner/dashboard" label="داشبورد" icon={HiHome} />
        <NavMenuItem to="/owner/projects" label="پروژه‌ها" icon={HiBriefcase} />
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
