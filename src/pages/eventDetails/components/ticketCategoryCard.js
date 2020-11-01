import React from "react";

const TicketCategoryCard = () => {
  return (
    <div className="card">
      <div>Ticket Category</div>
      <table>
        <tbody>
          <tr>
            <td>
              <div>Regular</div>
            </td>
            <td>
              <div>Free</div>
            </td>
            <td>
              <div>Batch</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketCategoryCard;
