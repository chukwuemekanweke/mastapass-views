import React from 'react'
import { BusinessCard, AddLocationModal } from '../../components'

const BusinessLocation = () => {

let data = [1,2,3];
    function modalControl(modalId) {
        let modal = document.getElementById(modalId)
        let body = modal.getElementsByClassName("modal-body")[0]
        let content = modal.getElementsByClassName("modal-content")[0]
      
        if (modal.classList.contains("open")) {
          content.classList.remove("open")
          document.body.classList.remove("no-overflow")
          setTimeout(() => {
            modal.classList.remove("open")
            body.classList.remove("no-overflow")
          }, 150)
        } else {
          document.body.classList.add("no-overflow")
          modal.classList.add("open")
          setTimeout(() => {
            body.classList.add("show");
            content.classList.add("open")
          }, 100)
        }
      }
    return (
        <div className="container">

        <div className="row mt2">
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col-md-6 pt2 pb2">
                  <img src={"../assets/df.png"} className="rounded-sm" alt="business-logo"/>
                  <div className="font32 semi-bold">The Coca-Cola Company</div>
                  <div>cocacola@gmail.com</div>
                </div>


                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="row mt5">
          <div className="col">
            <div className="flex justify-space-between">
              <div className="semi-bold">Locations</div>
              <div>
                <div className="add-details" onClick={()=>{modalControl('add-location')}}>
                  <div className="flex align-center">
                    <i className="fas fa-plus"></i>
                    <div className="w1"></div>
                    <div className="font16 bold">Add location</div>
                  </div>
                </div>
                <AddLocationModal modalControl={modalControl}/>
              </div>
            </div>
          </div>
        </div>
    
        <div className="row mt2 mb5">
          <div className="col">
            <div className="business-locations">
                {
                    data.map((item, index)=>{
                        return(
                            <BusinessCard location="Lagos" businessName="Silverbird Lagos" address="3 Cally drive, Emene, Enugu" latitudeLongitude="7.44, 3.33"/>
                        )
                    })
                }

            </div>
          </div>
        </div>
      </div>
    
    )
}

export {BusinessLocation}
