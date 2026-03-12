"use client";

import { IMAGES, SVGICON } from "../constant/theme";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import FormBody from "./FormBody";
import Image from "next/image";

function BookAppointment() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="map-wrapper">
        {/* GOOGLE MAP */}
        <iframe
          src="https://www.google.com/maps?q=Flat%20605%20Sheikh%20Rashid%20Rd%20Al%20Garhoud%20Garhoud%20Views%20Building%20Dubai%20United%20Arab%20Emirates&hl=en&z=15&output=embed"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          {show && (
            <Alert
              dismissible
              className="content-bx style-5 alert alert-dismissible fade show m-b60 position-absolute bottom-0"
            >
              {/* LOGO */}
              <div className="content-logo">
                <Image src={IMAGES.logo} alt="Signature Plus Clinic Logo" />
              </div>

              {/* ADDRESS */}
              <div className="content-text m-b20">
                <h6 className="m-b5">Office Address:</h6>
                <p className="m-b0">
                  Flat 605 - Sheikh Rashid Rd Al Garhoud <br />
                  Garhoud Views Building <br />
                  Dubai - United Arab Emirates
                </p>
              </div>

              {/* CONTACT */}
              <div className="content-text m-b20">
                <h6 className="m-b5">Contact:</h6>
                <p className="m-b0">
                  Phone: +971 433 33108 <br />
                  Email: info@signatureplusclinic.com
                </p>
              </div>

              {/* WORKING HOURS */}
              <div className="content-text">
                <h6 className="m-b5">Working Hours:</h6>
                <p className="m-b0">
                  Open Daily: <br />
                  11:00 AM - 10:00 PM
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShow(false)}
                type="button"
                className="btn-close"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: SVGICON.crossicon }}
                ></span>
              </button>
            </Alert>
          )}
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="container">
        <div className="row justify-content-end">
          <div
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <div className="item1">
              <div className="form-wrapper style-2 bg-secondary">
                <FormBody />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;