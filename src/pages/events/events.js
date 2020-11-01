import React from 'react'
import ActiveEventsTable from './components/activeEventsTable'

const Events = (props) => {
    return (
        <div>
            <div className="container">
    <div className="row mt2 mb5">
      <div className="col-12">
        <div className="card">
          <div className="flex align-center mb1">
            <img src="../assets/df.png" className="rounded-sm" alt="business-logo"/>
            <div className="w2"></div>
            <div className="semi-bold font24">Silverbird Lagos</div>
          </div>
          <div>3 Cally drive, Emene, Enugu</div>
          <div className="font14">Lagos, Nigeria</div>

          <div className="flex mt5">
            <div className="event-choose-wrapper">
              <div><input type="radio" name="event" id="active" checked/></div>
              <div className="w1"></div>
              <label className="cursor-pointer" for="active">Active events</label>
            </div>
            <div className="w5"></div>
            <div className="event-choose-wrapper">
              <div><input type="radio" name="event" id="archived"/></div>
              <div className="w1"></div>
              <label className="cursor-pointer" for="archived">Archived events</label>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="row mb5">
      <ActiveEventsTable/>
    </div>
  </div>
        </div>
    )
}

export {Events}
