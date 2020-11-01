import React from 'react'

const LocationCards = ({name, location, latitudeLongitude}) => {
    return (
        <div className="mt2">
              <div className="added-locations">
                <div>
                  <div style={{backgroundImage: "url('../assets/df.png')", height: 100}}></div>
                  <div className="pt2 pl2 pr2 pb2">
                    <div className="font-md">{name}</div>
                    <div className="font14">{location}, Nigeria</div>
                    <div className="font14 mt1 flex align-center">
                      <i className="fas fa-map-marker" style={{fontSize: 10}}></i>
                      <div className="w1"></div>
                      <div className="font-md">{latitudeLongitude}</div>
                    </div>
                    <div>
                      <span className="bold mt2" style={{color:"red", cursor: "pointer"}}>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default LocationCards
