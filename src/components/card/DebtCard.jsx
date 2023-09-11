import React from "react";

const DebtCard = ({ name, phone, debt, data, debtData }) => {
  return (
    <div className=" col-3 d-flex justify-content-around bg-white">
      <div className="col-head">
        <h4>{name}</h4>
        <h4>{debt}$</h4>
        <p>
          {data} - {debtData}
        </p>
        <p>{phone}</p>
      </div>
      <div className="col-bot d-grid">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default DebtCard;
