import React from "react";
import "./SideBar.css";
import Filters from "../../Admin/Products/Filters/Filters";

const SideBar = ({ filter, isAdmin }) => {
  const styleAccordingToRole = isAdmin => {
    return isAdmin ? "admin-products-filters" : "user-products-filters";
  };

  return (
    <div
      className={`col-sm-12 col-md-3 col-lg-2 text-xs-center ${styleAccordingToRole(
        isAdmin
      )}`}
    >
      <div className="mt-4 ml-2">
        <h3 className="pb-3">Filters</h3>
        <Filters applyFilters={filter} />
      </div>
    </div>
  );
};

export default SideBar;
