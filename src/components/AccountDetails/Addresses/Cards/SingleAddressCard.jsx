import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import "./SingleAddressCard.css";
import ConfirmationModal from "../../../UI/ConfirmationModal/ConfirmationModal";
import { deleteAddressAt } from "../AddressesManager";
import AddModifyAddressModal from "../AddModifyAddressModal";

const SingleAddressCard = ({ alias, position, userData }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalModify, setShowModalModify] = useState(false);

  const changeModalStatus = () => {
    setShowModalModify(!showModalModify);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        show={showModalDelete}
        title="Delete address"
        message={
          "Are you sure you want to delete this address? This cannot be undone"
        }
        negativeText="No"
        negativeAction={() => {
          setShowModalDelete(false);
        }}
        affirmativeText="Yes"
        affirmativeAction={() => {
          deleteAddressAt(position, userData);
          setShowModalDelete(false);
        }}
        closeAction={() => {
          setShowModalDelete(false);
        }}
      />
      <AddModifyAddressModal
        isModifying={true}
        position={position}
        title={"Modify address"}
        buttonText={"Modify"}
        showModalStatus={showModalModify}
        modalStatusChange={changeModalStatus}
        userData={userData}
      />

      <div className="row address-cell">
        <div className="col-7 col-md-8 my-auto text-center">{alias}</div>
        <div className="col-2 py-1">
          <button
            className="btn btn-sm btn-intersys"
            onClick={() => {
              setShowModalModify(true);
            }}
          >
            <FaEdit />
          </button>
        </div>
        <div className="col-2 py-1">
          <button
            className="btn btn-sm btn-intersys"
            onClick={() => {
              setShowModalDelete(true);
            }}
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleAddressCard;
