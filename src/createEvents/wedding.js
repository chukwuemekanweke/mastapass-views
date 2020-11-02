import React from 'react'
import imageIcon from '../assets/image/df.png'
import { modalControl } from '../assets/main'
import DatePicker from '../components/datePickerComp'
import DropifyComp from '../components/dropifyComponent'


const WeddingEvents = () => {
    return (
        <section>
            <div className="container mb5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <section>
                            <div className="font24 bold mt5">Basic Info</div>
                            <div className="font16">Name your event and tell event-goers why they should come. Add details that highlight
                            what
                  makes it unique.</div>

                            <div className="input-wrapper">
                                <input type="text" placeholder="Event name" />
                            </div>

                            <div className="input-wrapper">
                                <input type="text" placeholder="Sub title" />
                            </div>

                            <div className="input-wrapper">
                                <textarea placeholder="Description"></textarea>
                            </div>

                            <div>
                                <button className="button">Continue</button>
                            </div>

                            <div className="mt5">
                                <div className="flex align-center justify-space-between">
                                    <div className="bold font24">Event Images</div>
                                    <div className="w2"></div>
                                    <div>
                                        <div className="add-details" onClick={() => { modalControl('add-image') }}>
                                            <div className="flex align-center">
                                                <i className="fas fa-plus"></i>
                                                <div className="w1"></div>
                                                <div className="font16 bold">Add</div>
                                            </div>
                                        </div>

                                        <div id="add-image" className="modal">
                                            <div className="modal-body">
                                                <div>
                                                    <div className="modal-content">
                                                        <div className="flex justify-space-between">
                                                            <div></div>
                                                            <div className="modal-title">Add Event Image</div>
                                                            <div className="close-modal" id="close-modal">
                                                                <span onClick={() => { modalControl('add-image') }}>&#10005;</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt2">
                                                            <div>
                                                                <DropifyComp />
                                                            </div>
                                                            <div>
                                                                <button className="button">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt1">
                                    <div className="col-md-6">
                                        <DropifyComp />
                                    </div>
                                    <div className="col-md-6">
                                        <DropifyComp />
                                    </div>
                                </div>
                            </div>

                            <div className="mt2">
                                <div className="flex align-center justify-space-between">
                                    <div className="bold font24">Event Videos</div>
                                    <div className="w2"></div>
                                    <div>
                                        <div className="add-details" onClick={() => { modalControl('add-video') }}>
                                            <div className="flex align-center">
                                                <i className="fas fa-plus"></i>
                                                <div className="w1"></div>
                                                <div className="font16 bold">Add</div>
                                            </div>
                                        </div>

                                        <div id="add-video" className="modal">
                                            <div className="modal-body">
                                                <div>
                                                    <div className="modal-content">
                                                        <div className="flex justify-space-between">
                                                            <div></div>
                                                            <div className="modal-title">Add Event Video</div>
                                                            <div className="close-modal" id="close-modal">
                                                                <span onClick={() => { modalControl('add-video') }}>&#10005;</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt2">
                                                            <div>
                                                                <DropifyComp />
                                                            </div>
                                                            <div>
                                                                <button className="button">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt1">
                                    <div className="col-md-6">
                                        <input type="file" name="" id="" className="dropify" data-allowed-file-extensions="mp4" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="file" name="" id="" className="dropify" data-allowed-file-extensions="mp4" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt2">
                                <div className="flex align-center justify-space-between">
                                    <div className="bold font24">Ticket Categories</div>
                                    <div className="w2"></div>
                                    <div>
                                        <div className="add-details" onClick={() => { modalControl('add-ticket-category') }}>
                                            <div className="flex align-center">
                                                <i className="fas fa-plus"></i>
                                                <div className="w1"></div>
                                                <div className="font16 bold">Add</div>
                                            </div>
                                        </div>

                                        <div id="add-ticket-category" className="modal">
                                            <div className="modal-body">
                                                <div>
                                                    <div className="modal-content" id="modal-content">
                                                        <div className="flex justify-space-between">
                                                            <div></div>
                                                            <div className="modal-title">Add Ticket Category</div>
                                                            <div className="close-modal" id="close-modal">
                                                                <span onClick={() => { modalControl('add-ticket-category') }}>&#10005;</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Name" />
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Price" />
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <select>
                                                                    <option value="">Choose Fee Plan</option>
                                                                    <option>Absorb Fees</option>
                                                                    <option>Pass Fee On</option>
                                                                </select>
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <select>
                                                                    <option value="">Choose Payment Type</option>
                                                                    <option>Free</option>
                                                                    <option>Paid</option>
                                                                    <option>Donation</option>
                                                                </select>
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Ticket Quantity" />
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <DatePicker id={'ticket-sales-range'} typeOfRange={'ticket-sales-range'} placeHolder={'Sales date range'} />
                                                            </div>
                                                            <div className="input-wrapper">
                                                                <DatePicker id={'ticket-use-range'} typeOfRange={'ticket-use-range'} placeHolder={'Usage date range'} />
                                                            </div>
                                                            <div>
                                                                <button className="button">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-wrapper">
                                    <table>
                                        <tr>
                                            <td>Free ticket</td>
                                            <td>#3,000</td>
                                            <td>Absorb Fees</td>
                                            <td>Free</td>
                                            <td>200</td>
                                            <td>
                                                <i onClick={() => { modalControl('view-more-details') }} className="fas fa-ellipsis-h"></i>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="view-more-details" className="modal">
                                    <div className="modal-body">
                                        <div>
                                            <div className="modal-content" id="modal-content">
                                                <div className="flex justify-space-between">
                                                    <div></div>
                                                    <div className="modal-title">Ticket Category</div>
                                                    <div className="close-modal" id="close-modal">
                                                        <span onClick={() => { modalControl('view-more-details') }}>&#10005;</span>
                                                    </div>
                                                </div>
                                                <div className="row mt2">
                                                    <div className="col-md-4">
                                                        <div className="font14">Category name</div>
                                                        <div>Free for all</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="font14">Price</div>
                                                        <div>#3,000</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="font14">Fee Plan</div>
                                                        <div>Absorb Fees</div>
                                                    </div>
                                                </div>
                                                <div className="row mt2">
                                                    <div className="col-md-4">
                                                        <div className="font14">Payment type</div>
                                                        <div>Free</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="font14">Quantity</div>
                                                        <div>500</div>
                                                    </div>
                                                </div>
                                                <div className="row mt2">
                                                    <div className="col-md-6">
                                                        <div className="font14">Ticket sales date range</div>
                                                        <div>17 Jul, 20 <i className="fas fa-arrow-right"></i> 31 Jul, 20</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="font14">Ticket usage date range</div>
                                                        <div>17 Jul, 20 <i className="fas fa-arrow-right"></i> 31 Jul, 20</div>
                                                    </div>
                                                </div>
                                                <div className="row mt2">
                                                    <div className="col">
                                                        <span className="bold" style={{ color: "red", cursor: "pointer" }}>Delete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="bold font24 mt5">Weddings</div>

                        <div className="input-wrapper">
                            <input type="text" placeholder="Brides Name" />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Grooms Name" />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Address" />
                        </div>
                        <div className="input-wrapper">
                            <select className="chosen" data-placeholder="Choose venue...">
                                <option></option>
                                <option>Abia</option>
                            </select>
                        </div>
                        <div className="input-wrapper">
                            <DatePicker id={'wedding-date'} placeHolder={'Date'} />
                        </div>

                        <div className="mt5">
                            <div className="flex align-center justify-space-between">
                                <div className="semi-bold">Asoebi / Souveniers</div>
                                <div className="w2"></div>
                                <div>
                                    <div className="add-details" onClick={() => { modalControl('add-souveniers') }}>
                                        <div className="flex align-center">
                                            <i className="fas fa-plus"></i>
                                            <div className="w1"></div>
                                            <div className="font16 bold">Add</div>
                                        </div>
                                    </div>

                                    <div id="add-souveniers" className="modal">
                                        <div className="modal-body">
                                            <div>
                                                <div className="modal-content">
                                                    <div className="flex justify-space-between">
                                                        <div></div>
                                                        <div className="modal-title">Add Souvenier</div>
                                                        <div className="close-modal" id="close-modal">
                                                            <span onClick={() => { modalControl('add-souveniers') }}>&#10005;</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt2">
                                                        <div>
                                                            <DropifyComp />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Price" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Quantity" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <select>
                                                                <option>Managed</option>
                                                                <option>Not Managed</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <button className="button">Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="table-wrapper">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={imageIcon} className="rounded-sm" alt="" />
                                            </td>
                                            <td>Lemon Green Shirt</td>
                                            <td>#5,000</td>
                                            <td>50</td>
                                            <td>Managed</td>
                                            <td>
                                                <i className="far fa-trash-alt"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={imageIcon} className="rounded-sm" alt="" />
                                            </td>
                                            <td>Lemon Green Shirt</td>
                                            <td>#5,000</td>
                                            <td>50</td>
                                            <td>Managed</td>
                                            <td>
                                                <i className="far fa-trash-alt"></i>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="mt5">
                            <div className="flex align-center justify-space-between">
                                <div className="semi-bold">Presenters</div>
                                <div className="w2"></div>
                                <div>
                                    <div className="add-details" onClick={() => { modalControl('add-presenter') }}>
                                        <div className="flex align-center">
                                            <i className="fas fa-plus"></i>
                                            <div className="w1"></div>
                                            <div className="font16 bold">Add</div>
                                        </div>
                                    </div>

                                    <div id="add-presenter" className="modal">
                                        <div className="modal-body">
                                            <div>
                                                <div className="modal-content">
                                                    <div className="flex justify-space-between">
                                                        <div></div>
                                                        <div className="modal-title">Add Presenter</div>
                                                        <div className="close-modal" id="close-modal">
                                                            <span onClick={() => { modalControl('add-presenter') }}>&#10005;</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt2">
                                                        <div>
                                                            <DropifyComp />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Instagram URL" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Twitter URL" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="LinkedIn URL" />
                                                        </div>
                                                        <div>
                                                            <button className="button">Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="table-wrapper">
                                    <table>
                                        <tr>
                                            <td><img src={imageIcon} alt="" className="rounded-sm" /></td>
                                            <td>Ugochukwu Cally Nnamani</td>
                                            <td>
                                                <div className="flex">
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                    <div className="w2"></div>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <div className="w2"></div>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <i className="far fa-trash-alt"></i>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="mt5">
                            <div className="flex align-center justify-space-between">
                                <div className="semi-bold">Attendees</div>
                                <div className="w2"></div>
                                <div>
                                    <div className="add-details" onClick={() => { modalControl('add-attendee') }}>
                                        <div className="flex align-center">
                                            <i className="fas fa-plus"></i>
                                            <div className="w1"></div>
                                            <div className="font16 bold">Add</div>
                                        </div>
                                    </div>

                                    <div id="add-attendee" className="modal">
                                        <div className="modal-body">
                                            <div>
                                                <div className="modal-content">
                                                    <div className="flex justify-space-between">
                                                        <div></div>
                                                        <div className="modal-title">Add Attendee</div>
                                                        <div className="close-modal" id="close-modal">
                                                            <span onClick={() => { modalControl('add-attendee') }}>&#10005;</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt2">
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                        <div className="input-wrapper">
                                                            <input type="text" placeholder="Phone number" />
                                                        </div>
                                                        <div>
                                                            <button className="button">Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="table-wrapper">
                                    <table>
                                        <tr>
                                            <td>Ugochukwu Cally Nnamani</td>
                                            <td>07017895599</td>
                                            <td>
                                                <i className="far fa-trash-alt"></i>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
    )
}

export default WeddingEvents