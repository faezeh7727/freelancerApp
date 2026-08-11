/** @format */


import Filterdropdown from "../../../ui/Filterdropdown";
import useCategories from "../../../hooks/useCategories";
function ProjectHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary mb-7">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div>
        <Filterdropdown
          filterField="category"
          options={[
            {
              value: "All",
              label: "دسته بندی (همه)",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
