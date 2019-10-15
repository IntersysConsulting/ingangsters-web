import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./SingleAddressCard.css";
import "./AddAddressCard.css";
import AddModifyAddressModal from "../AddModifyAddressModal";

const AddAddressCard = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);

  const changeModalStatus = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <AddModifyAddressModal
        isModifying={false}
        title={"Add address"}
        buttonText={"Add"}
        showModalStatus={showModal}
        modalStatusChange={changeModalStatus}
        userData={userData}
      />

      <div className="row new-address-cell" onClick={changeModalStatus}>
        <div className="col-12 text-center py-1">
          <FaPlus size={30} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddAddressCard;
