import React,{useState, useEffect} from "react";
import healthWorker from '../../images/health-worker.jpg'
import EventPerformersTable from "./components/eventPerformersTable";
import EventScheduleTable from "./components/eventScheduleTable";
import EventsItemTable from "./components/eventsItemTable";
import EventVenueMap from "./components/eventVenueMap";
import TicketCategoryCard from "./components/ticketCategoryCard";
import TicketTable from "./components/ticketTable";

const EventDetails = () => {
        window.$(document).ready(function () {
        window.$('.img-gallery').not('.slick-initialized').slick({autoplay: true})
      })

      

    


  return (
    <section>
      <div className="container">
        <div className="row mt2 mb5">
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                  <div className="flex align-center justify-center mb1">
                    <img
                      src="../assets/df.png"
                      className="rounded-sm"
                      alt="business-logo"
                    />
                    <div className="w2"></div>
                    <div className="semi-bold font24">Silverbird Lagos</div>
                  </div>
                  <div>Lagos, Nigeria</div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <div className="event-details-top">
              <div
                className="event-details-banner"
                style={{backgroundImage: `url('${healthWorker}')`}}
              ></div>
              <div>
                <div className="headers">Eve weds Adam</div>
                <div className="sub-header">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam repudiandae aliquam totam, quam tempore laboriosam iste
                  reprehenderit eum, dolores vero provident eos vitae fugit
                  suscipit officiis voluptatum. Aut, rem eius.
                </div>
                <div className="row mt2" style={{paddingLeft: 13}}>
                  <div className="four columns">
                    <div>May 20, 2020</div>
                    <div className="font14 bold">Start date</div>
                  </div>
                  <div className="four columns">
                    <div>Jul 12, 2020</div>
                    <div className="font14 bold">End date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <div className="other-event-details-1">
              <TicketCategoryCard/>
              <TicketTable/>
              <EventsItemTable/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <div className="other-event-details-2">
              <EventScheduleTable/>
              <EventPerformersTable/>
              <EventVenueMap/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <div className="other-event-details-3">
              <div className="card">
                <div>Image gallery</div>
                <div className="img-gallery">
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1593542091381-8579f854507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1594022348898-becca3809dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="six columns">
            <div className="other-event-details-3">
              <div className="card">
                <div>Videos</div>
                <div className="img-gallery">
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1593542091381-8579f854507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1594022348898-becca3809dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                  <div
                    className="img-gallery-item"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}
                  >
                    <div className="item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{height: 50}}></div>
    </section>
  );
};

export {EventDetails};
