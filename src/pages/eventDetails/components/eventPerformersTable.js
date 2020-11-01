import React from "react";

const EventPerformersTable = () => {
  return (
    <div className="card">
      <div>Event Performers</div>
      <div className="speaker">
        <div></div>
        <div>
          <div>Emeka Jeremiah</div>
          <div className="font14 bold">Head Organizer</div>
          <div>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="speaker">
        <div></div>
        <div>
          <div>Jeremiah Nweke</div>
          <div className="font14 bold">Guest Speaker</div>
          <div>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPerformersTable;
