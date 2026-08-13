/** @format */

import React from "react";
import { useSearchParams } from "react-router-dom";
import CustomSelect from "./Select";

function Filterdropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(newValue) {
    searchParams.set(filterField, newValue);
    setSearchParams(searchParams);
  }
    
     return (
    <CustomSelect
      value={value}
      onChange={handleChange}
      options={options}
      placeholder="فیلتر دسته بندی"
    />
  );
  }

 

export default Filterdropdown;
