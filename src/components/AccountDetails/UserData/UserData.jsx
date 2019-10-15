import React, { useState } from "react";
import "./UserData.css";
import { FaEdit } from "react-icons/fa";
import ChangePhoneModal from "./Modals/ChangePhoneModal";
import ChangePasswordModal from "./Modals/ChangePasswordModal";

const UserData = ({ userData }) => {
  const [showModalPhone, setShowModalPhone] = useState(false);
  const [showModalChangePassword, setShowModalChangePassword] = useState(false);

  const changeStatusShowPhoneModal = () => {
    setShowModalPhone(!showModalPhone);
  };

  const changeStatusShowChangePassword = () => {
    setShowModalChangePassword(!showModalChangePassword);
  };

  return (
    <React.Fragment>
      <ChangePhoneModal
        showModalStatus={showModalPhone}
        modalStatusChange={changeStatusShowPhoneModal}
        userData={userData}
      />

      <ChangePasswordModal
        showModalStatus={showModalChangePassword}
        modalStatusChange={changeStatusShowChangePassword}
      />

      <div className="container pt-3 text-center">
        <div className="row">
          <div className="col-12">
            <h3 className="name-prop">Account Details - {userData.name}</h3>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-12">
            <h4>Your email address</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 user-data-cell py-1">
            {userData.email}
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-12">
            <h5>Your phone number</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 user-data-cell py-1">
            {userData.phone ? userData.phone : "N/A"}
          </div>
          <div
            className="col-1"
            onClick={() => {
              setShowModalPhone(true);
            }}
          >
            <FaEdit size={25} className="icon-edit" />
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <h5>Your password</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 user-data-cell py-1">xxxxxxxxxxxx</div>
          <div
            className="col-1"
            onClick={() => {
              setShowModalChangePassword(true);
            }}
          >
            <FaEdit size={25} className="icon-edit" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserData;
