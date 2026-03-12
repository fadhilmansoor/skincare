"use client";

import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footermenu } from "../constant/alldata";
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function Footer() {
  const form = useRef<HTMLFormElement | null>(null);
  const { sendEmail } = useEmailService();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const result = await sendEmail(form.current);
    if (result.success) {
      console.log("SUCCESS!", result.message);
    } else {
      console.error("FAILED...", result.message);
    }
  };

  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className="site-footer style-2 footer-dark background-blend-luminosity"
        style={{ backgroundImage: `URL(${IMAGES.bg1.src})` }}
      >
        <div className="footer-head">
          <div className="container"></div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-sm-12 wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="0.8s"
              >
                <div className="widget widget_about me-2">
                  <h2 className="footer-title">
                    Advanced Beauty <br /> & Dental Care
                  </h2>

                  <p>
                    Signature Plus Clinic offers personalized derma, dental, cosmetic, and hair
                    restoration treatments designed to deliver natural-looking results with modern
                    technology and expert care.
                  </p>

                  <ul className="list-unstyled m-b20">
                    <li className="m-b10">
                      <i className="feather icon-map-pin me-2" />
                      Dubai, United Arab Emirates
                    </li>
                    <li className="m-b10">
                      <i className="feather icon-phone-call me-2" />
                      <Link href="tel:+97143333108" className="text-white">
                        +971 433 33108
                      </Link>
                    </li>
                    <li className="m-b10">
                      <i className="feather icon-mail me-2" />
                      <Link href="mailto:info@signatureplusclinic.com" className="text-white">
                        info@signatureplusclinic.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-9 col-sm-12 wow fadeInUp"
                data-wow-delay="0.8s"
                data-wow-duration="0.8s"
              >
                <div className="row">
                  {footermenu.map((data, i) => (
                    <div className="col-xl-3 col-md-3 col-6" key={i}>
                      <div className="widget widget_services">
                        <h2 className="footer-title">{data.title}</h2>
                        <ul className="list-hover1">
                          <li>
                            <Link href={data.link1}>
                              <span>{data.span1}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={data.link2}>
                              <span>{data.span2}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={data.link3}>
                              <span>{data.span3}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={data.link4}>
                              <span>{data.span4}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={data.link5}>
                              <span>{data.span5}</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="container">
            <div className="fm-inner">
              <div className="row g-3 align-items-center">
                <div
                  className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h3 className="title">Get in Touch with us</h3>
                  <p className="text">We’re here daily to help with appointments and questions.</p>
                </div>

                <div
                  className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  <div className="icon-bx-wraper style-1">
                    <div className="icon-bx bg-primary">
                      <span className="icon-cell">
                        <i className="feather icon-phone-call" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Call Us</h5>
                      <p>
                        <Link href="tel:+97143333108" className="text-body">
                          +971 433 33108
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.8s"
                >
                  <div className="icon-bx-wraper style-1">
                    <div className="icon-bx bg-primary">
                      <span className="icon-cell">
                        <i className="feather icon-mail" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Email</h5>
                      <p>
                        <Link href="mailto:info@signatureplusclinic.com" className="text-body">
                          info@signatureplusclinic.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="0.8s"
                >
                  <div className="icon-bx-wraper style-1">
                    <div className="icon-bx bg-primary">
                      <span className="icon-cell">
                        <i className="feather icon-clock" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h5 className="dz-title">Working Hours</h5>
                      <p>
                        <Link href="#" scroll={false} className="text-body">
                          Open daily: 11:00 AM - 10:00 PM
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row g-3 align-items-center mt-2">
                <div className="col-xl-12 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
                  <form className="dzSubscribe style-2" ref={form} onSubmit={handleSubmit}>
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group">
                      <div className="input-group mb-0">
                        <input
                          name="dzEmail"
                          required
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn text-primary btn-transparent p-2"
                          >
                            <i className="fa-solid fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="fb-inner">
              <div className="row">
                <div className="col-lg-6 col-md-12 text-start">
                  <p className="copyright-text">
                    © <span className="current-year">{year}</span>{" "}
                    <Link href="/" target="_self">
                      Signature Plus Clinic
                    </Link>
                    . All Rights Reserved.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 text-end">
                  <Image src={IMAGES.cards} alt="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;