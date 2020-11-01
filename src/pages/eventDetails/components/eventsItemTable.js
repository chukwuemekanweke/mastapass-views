import React from "react";

const EventsItemTable = () => {
  return (
    <div className="card">
      <div>Event Items</div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="img-placeholder"></div>
            </td>
            <td>Books</td>
            <td>
              300 <span className="font14 bold">Qty</span>
            </td>
            <td>
              1,500 <span className="font14 bold">NGN</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="img-placeholder"></div>
            </td>
            <td>Aseobi</td>
            <td>
              50 <span className="font14 bold">Qty</span>
            </td>
            <td>
              10,000 <span className="font14 bold">NGN</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="img-placeholder"></div>
            </td>
            <td>Snacks</td>
            <td>
              1,000 <span className="font14 bold">Qty</span>
            </td>
            <td>
              1,000 <span className="font14 bold">NGN</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventsItemTable;
