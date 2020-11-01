import React from "react";

const EventScheduleTable = () => {
  return (
    <div className="card">
      <div>Event Schedule</div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>Introduction</div>
              <div className="font14">
                Lorem ipsum, dolor sit amet consectetur elit...
              </div>
            </td>
            <td>
              <div>12:30</div>
              <div className="font14 bold">Start</div>
            </td>
            <td>
              <div>14:30</div>
              <div className="font14 bold">End</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventScheduleTable;
