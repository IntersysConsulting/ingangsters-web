import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-2 side-bar-products-filters">
      <div className="mt-5 ml-2">
        <h4>Physical or digital</h4>
        <ul>
          <li className="list-unstyled">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Digital</label>
          </li>
          <li className="list-unstyled">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Physical</label>
          </li>
        </ul>

        <h4>Filter by price range</h4>
        <div>
          <div>
            <input type="radio" className="mr-2 ml-4" />
            <label className="form-check-label">0 - 100$</label>
          </div>
          <div>
            <input type="radio" className="mr-2 ml-4" />
            <label className="form-check-label">100 - 500$</label>
          </div>
          <div>
            <input type="radio" className="mr-2 ml-4" />
            <label className="form-check-label">More than $500</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
