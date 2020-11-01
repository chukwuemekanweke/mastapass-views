import React from 'react'

const ActiveEventsTable = (props) => {
    return (
        <div>
            <div className="col">
        <div className="font24 semi-bold">Active Events</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th colspan="3" className="text-center">Details</th>
                <th colspan="6" className="text-center">Tickets</th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Sold</th>
                <th>Total</th>
                <th>Categories</th>
                <th>Reviews</th>
                <th>Amount Realized</th>
                <th>Amount Expected</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-circle fa-sm" style={{color:"#4a937b"}}></i>
                </td>
                <td>Ada weds Emeka</td>
                <td>Lorem ipsum dolor sit amet consectetur ...</td>
                <td>20 May, 20</td>
                <td>103</td>
                <td>150</td>
                <td>List of categories</td>
                <td>5 stars</td>
                <td>2600</td>
                <td>5000</td>
                <td>
                  <button>view</button>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-circle fa-sm" style={{color:"#4a937b"}}></i>
                </td>
                <td>First Python Conference in Benin</td>
                <td>Lorem ipsum dolor sit amet consectetur ...</td>
                <td>20 May, 20</td>
                <td>103</td>
                <td>150</td>
                <td>List of categories</td>
                <td>5 stars</td>
                <td>2600</td>
                <td>5000</td>
                <td>
                  <button>view</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt2 flex justify-center">
          <button>Previous</button>
          <div className="w2"></div>
          <button>Next</button>
        </div>
      </div>
        </div>
    )
}

export default ActiveEventsTable
