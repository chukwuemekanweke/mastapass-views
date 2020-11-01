import React,{useEffect} from "react";

const EventVenueMap = () => {

    useEffect(()=>{
        document.getElementById('mapid').innerHTML = "";
        var mymap = window.L.map('mapid').setView([51.505, -0.09], 13);

      },[])

  return (
    <div className="card">
      <div>Event Venue and map</div>
      <div id="mapid"></div>
    </div>
  );
};

export default EventVenueMap;
