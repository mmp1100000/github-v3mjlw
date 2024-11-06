import React, { useEffect } from "react";
import { niceSelect } from "../utils";

const ListingDetailsRight = ({ listing }) => {
  useEffect(() => {
    // Initialize nice-select when component mounts
    niceSelect();
  }, []);

  if (!listing) return null;

  return (
    <div className="col-lg-4">
      <div className="sidebar-widget-area">
        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Make a Reservation</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                placeholder="Name"
                name="name"
                required=""
              />
              <i className="ti-user" />
            </div>
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                placeholder="Phone"
                name="phone"
                required=""
              />
              <i className="ti-mobile" />
            </div>
            <div className="form_group">
              <select className="wide">
                <option value="" disabled selected>
                  Guest
                </option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>
            <div className="form_group">
              <select className="wide">
                <option value="" disabled selected>
                  Date
                </option>
                <option value="1">01.11.2023</option>
                <option value="2">02.11.2023</option>
                <option value="3">03.11.2023</option>
                <option value="4">04.11.2023</option>
                <option value="5">05.11.2023</option>
              </select>
            </div>
            <div className="form_group">
              <select className="wide">
                <option value="" disabled selected>
                  Time
                </option>
                <option value="1">08:00 AM - 09:00 AM</option>
                <option value="2">09:00 AM - 10:00 AM</option>
                <option value="3">10:00 AM - 11:00 AM</option>
                <option value="4">11:00 AM - 12:00 PM</option>
                <option value="5">12:00 PM - 01:00 PM</option>
                <option value="6">01:00 PM - 02:00 PM</option>
                <option value="7">02:00 PM - 03:00 PM</option>
                <option value="8">03:00 PM - 04:00 PM</option>
              </select>
            </div>
            <div className="form_group">
              <button className="main-btn icon-btn">Book Now</button>
            </div>
          </form>
        </div>
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a href="#" className="support-icon">
                <i className="flaticon-headphone" />
              </a>
            </div>
            <div className="contact-info-content">
              <h4 className="widget-title">Contact Info</h4>
              <div className="info-list">
                <p>
                  <i className="ti-tablet" />
                  <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                </p>
                <p>
                  <i className="ti-location-pin" />
                  {listing.location}
                </p>
                <p>
                  <i className="ti-email" />
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </p>
                <p>
                  <i className="ti-world" />
                  <a href="www.fioxen.com">www.fioxen.com</a>
                </p>
              </div>
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="widget business-hour-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Business Hour</h4>
          <ul className="time-info">
            <li>
              <span className="day">Monday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Tuesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Wednesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Thursday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Friday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Saturday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Sunday</span>
              <span className="time st-close">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;