/** @format */

import Filterdropdown from "../../../ui/Filterdropdown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
const sortOptions = [
  { value: "latest", label: "مرتب سازی(جدیدترین)" },
  { value: "earliest", label: "مرتب سازی(قدیمی ترین)" },
];

const statusOptions = [
  { value: "ALL", label: "همه" },
  { value: "OPEN", label: "باز" },
  { value: "CLOSED", label: "بسته" },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();
  return (
    <header className=" mb-7">
      <div className="flex  items-center justify-around gap-5 text-secondary ">
        <h1 className="font-bold text-nowrap text-lg">لیست پروژه ها</h1>
        <Filter filterField="status" options={statusOptions} />
        <div className="flex flex-col md:flex-row gap-3">
        <Filterdropdown filterField="sort" options={sortOptions} />
        <Filterdropdown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
        </div>
      </div>
    </header>
  );
}

export default ProjectHeader;
