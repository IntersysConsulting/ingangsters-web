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
      <div className="mt-4 ml-2 filters-fixed">
        <h3 className="pb-3 filters-title">Filters</h3>
        <Filters isAdmin={isAdmin} applyFilters={filter} />
      </div>
    </div>
  );
};

export default SideBar;
