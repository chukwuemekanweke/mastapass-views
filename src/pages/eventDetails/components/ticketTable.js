import React from "react";

const TicketTable = () => {
  return (
    <div className="card">
      <div>Tickets</div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>Regular</div>
              <div className="font14 bold">1,000 NGN</div>
            </td>
            <td>
              <div>10</div>
              <div className="font14 bold">Available</div>
            </td>
            <td>
              <div>150</div>
              <div className="font14 bold">Total</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>VIP</div>
              <div className="font14 bold">10,000 NGN</div>
            </td>
            <td>
              <div>2</div>
              <div className="font14 bold">Available</div>
            </td>
            <td>
              <div>20</div>
              <div className="font14 bold">Total</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
