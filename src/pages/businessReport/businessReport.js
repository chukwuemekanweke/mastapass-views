import React from "react";
import {BusinessCard} from '../../components/index'

const BusinessReport = () => {
    let data=[1,2]
  return (
    <div>
      <div className="container">
        <div className="row mt2">
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col-md-6 pt2 pb2">
                  <div className="flex align-center">
                    <img
                      src="../assets/df.png"
                      className="rounded-sm"
                      alt="business-logo"
                    />
                    <div className="w2"></div>
                    <div>
                      <div className="font32 semi-bold">The Coca-Cola Company</div>
                      <div>cocacola@gmail.com</div>
                    </div>
                  </div>

                  <div className="mt2">
                    <div>Chukwuemeka Jeremiah</div>
                    <div>08167828970</div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt5 mb5">
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
    </div>
  );
};

export { BusinessReport };
