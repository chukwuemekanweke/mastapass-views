import React from "react";

const BusinessCard = ({ location, businessName, address, latitudeLongitude }) => {
  return (
    <a>
      <div
        className="flex flex-column justify-end"
        style={{ height: 150, backgroundImage: 'url("../assets/df.png")' }}
      >
        <div className="pt1 pb1 pl1 pr1 white-bg-fade-up">
          <div className="font24">{location}</div>
          <div className="font14">{location}, Nigeria</div>
        </div>
      </div>
      <div className="pt2 pb2 pl2 pr2">
        <div className="flex align-center mb1">
          <img src="../assets/df.png" className="rounded-sm" alt="business-logo" />
          <div className="w2"></div>
          <div className="semi-bold">{businessName}</div>
        </div>
        <div>{address}</div>
        <div className="font14 mt1 flex align-center">
          <i className="fas fa-map-marker" style={{ fontSize: 10 }}></i>
          <div className="w1"></div>
          <div className="font-md">{latitudeLongitude}</div>
        </div>
      </div>
    </a>
  );
};

export {BusinessCard};
