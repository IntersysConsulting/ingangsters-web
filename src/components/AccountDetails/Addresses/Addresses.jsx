import React from "react";
import SingleAddressCard from "./Cards/SingleAddressCard";
import AddAddressCard from "./Cards/AddAddressCard";

const Addresses = ({ userData }) => {
  const { addresses } = userData;
  return addresses.length > 0 ? (
    <div className="col-12 col-lg-8 offset-lg-2 pt-3">
      <div className="row">
        <h5 className="text-center">Your addresses</h5>
        {addresses.map((singleAddress, i) => (
          <div key={i} className="col-12 pt-3">
            <SingleAddressCard
              position={i}
              alias={singleAddress.alias}
              userData={userData}
            />
          </div>
        ))}
      </div>
      <div className="pt-3">
        <AddAddressCard userData={userData} isModifying={false} />
      </div>
    </div>
  ) : (
    <div>
      <div className="col-12 col-lg-8 offset-lg-2 pt-3">
        <div className="text-center">No addresses</div>
        <div className="pt-3">
          <AddAddressCard userData={userData} isModifying={false} />
        </div>
      </div>
    </div>
  );
};

export default Addresses;
