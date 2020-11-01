import React from 'react'
import LocationCards from './components/locationCards'
import {AddLocationModal} from '../../components/index'
// import './createBusinessAssets/dropify/css/dropify.css'

const CreateBusiness = () => {
let data = [1,2]
window.$(document).ready(
  function () {
    
    window.$('.dropify').dropify();
  }
)
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
        <section>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt2 mb5">
          <div className="font32 semi-bold">Create a business</div>
          <div className="font14">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>

          <div className="row mt5">
            <div className="col-md-4">
              <div>Logo</div>
              <div>
                <input type="file" name="" id="" className="dropify"/>
              </div>
            </div>
            <div className="col-md-8">
              <div>Banner</div>
              <div>
                <input type="file" name="" id="" className="dropify"/>
              </div>
            </div>
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Business name"/>
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Address"/>
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Business owner email address"/>
          </div>

          <div className="input-wrapper">
            <input type="text" value="autogen@email.com" readonly/>
          </div>

          <div className="mt2">
            <div className="flex align-center justify-space-between">
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
            
            {
              data.map((item, index)=>{
                return(
                  <LocationCards name="Silverbird Cinema" location="Lagos" latitudeLongitude="7.44, 3.33"/>
                )
              })
            }
          </div>

        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  </section>
    )
}

export {CreateBusiness}
