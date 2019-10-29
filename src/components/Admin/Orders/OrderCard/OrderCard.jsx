import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { prettifyCents, prettifyStatus } from "../../../../utils/utils";
import "./OrderCard.css";
import ConfirmationModal from "../../../UI/ConfirmationModal/ConfirmationModal";
import { updateOrderStatus } from "../Connections";

const OrderCard = ({ id, date, status, total, nextOptions, reload }) => {
  const [modalData, setModalData] = React.useState({
    message: "Message goes here",
    targetStatus: null,
    show: false
  });
  const optionsDropdown = (
    <DropdownButton
      title={prettifyStatus(status)}
      id="changeStatusDropdown"
      key="changeStatusDropdown"
      className="nextOptionsDropdown"
    >
      {nextOptions.map(option => (
        <Dropdown.Item
          eventKey={option}
          key={option}
          onClick={() => {
            setModalData(prev => ({
              ...prev,
              title: "Order " + id,
              message: `Are you sure you wish to set this order status to ${prettifyStatus(
                option
              )}? This is a permanent operation`,
              targetStatus: option,
              show: true
            }));
          }}
        >
          {prettifyStatus(option)}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );

  function hideModal() {
    setModalData(prev => ({
      ...prev,
      show: false
    }));
  }

  return (
    <React.Fragment>
      <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10">
        <div className="orderCard">
          <div className="d-flex align-items-center w100 justify-content-between">
            <div className="d-flex flex-column">
              <span className="orderId">Order Id: {id.substring(19)}</span>
              <span>Date {date}</span>
            </div>
            <div className="orderStatus">{prettifyStatus(status)}</div>
          </div>
          <div className="d-flex align-items-center w100 justify-content-between">
            <div className="totalContainer">
              Total <span className="total">{prettifyCents(total)}</span>
            </div>
            {optionsDropdown}
          </div>
          <Link className="detailsButton" to={"/admin/order/" + id}>
            Details
          </Link>
        </div>
      </div>

      <ConfirmationModal
        title={modalData.title}
        message={modalData.message}
        affirmativeText="Change"
        negativeText="Cancel"
        closeAction={hideModal}
        negativeAction={hideModal}
        show={modalData.show}
        affirmativeAction={() => {
          updateOrderStatus(id, modalData.targetStatus, reload);
          hideModal();
        }}
      />
    </React.Fragment>
  );
};

export default OrderCard;
