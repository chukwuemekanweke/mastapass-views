import React from 'react'
// import './dropify.css'

const AddLocationModal = ({modalControl}) => {

  window.$(document).ready(
    function () {
      
      window.$('.dropify').dropify();
    }
  )

    return (
        <div id="add-location" className="modal">
                  <div className="modal-body">
                    <div>
                      <div className="modal-content">
                        <div className="flex justify-space-between">
                          <div></div>
                          <div className="modal-title">Add Location</div>
                          <div className="close-modal" id="close-modal">
                            <span onClick={()=>{modalControl('add-location')}}>&#10005;</span>
                          </div>
                        </div>
                        <div className="mt2">
                          <div>
                            <input type="file"
                        id="input-file-before"
className="dropify"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Name"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Address"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Country"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="State"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="City"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Latitude"/>
                          </div>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Longitude"/>
                          </div>
                          <div>
                            <button className="button">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export {AddLocationModal}
