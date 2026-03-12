"use client"
import { useRef, useState } from "react";
import Link from "next/link";
import { IMAGES, SVGICON } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { appointmentmapdata, contactusdata } from "@/constant/alldata";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";
import LocationsSection from "@/component/LocationsSection";

function ContactUs2() {
    const [map, setMap] = useState(1);
    
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    return (
        <>
            <Header />
            <main className="page-content">
                <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md dz-bnr-detail" style={{ backgroundImage: `url(${IMAGES.bnr1.src})` }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="row g-4 align-items-end">
                                <div className="col-xl-7 col-lg-6 pe-xl-5">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Us for Your dermatology Experience</h1>
                                    <div className="dz-media rounded-lg m-t20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                       <div style={{ position: "relative", width: "100%", height: "400px" }}>
  <Image
    src="/assets/images/imageupload/contactusbanner/1200x675.jpg"
    alt="Eyebrow transplant"
    fill
    style={{ objectFit: "cover" }}
  />
</div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <div className="form-wrapper style-2 bg-white">
                                        <div className="form-body">
                                            <div className="section-head style-1 mb-3">
                                                <h2 className="title fw-semibold m-b0">Get in Touch</h2>
                                                <p className="m-b0 text-body">You Can React Us Anytime</p>
                                            </div>
                                            <form ref={form} onSubmit={handleSubmit} className="dzForm">
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                                <div className="dzFormMsg"></div>
                                                <div className="row">
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-user" /></span>
                                                            <input name="dzName" type="text" className="form-control" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-mail" /></span>
                                                            <input name="dzEmail" type="email" className="form-control" placeholder="Your Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1 input-icon-left">
                                                            <span className="input-group-text text-primary"><i className="feather icon-phone" /></span>
                                                            <input name="dzPhoneNumber" type="number" className="form-control" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-b20">
                                                        <div className="floating-underline underline-1">
                                                            <textarea name="dzMessage" className="form-control" rows={5} placeholder="Write Massage"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 m-t10">
                                                        <button type="submit" name="submit" value="submit" className="btn btn-lg btn-primary w-100">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-info left">
                        <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
    <li>
        <Link href="https://www.instagram.com/signatureplus_dubai" target="_blank">
            Instagram
        </Link>
    </li>

    <li>
        <Link href="https://www.facebook.com/signatureplusclinic" target="_blank">
            Facebook
        </Link>
    </li>

    <li>
        <Link href="https://www.tiktok.com/@signature_plus" target="_blank">
            TikTok
        </Link>
    </li>

    <li>
        <Link href="https://www.snapchat.com/add/signatureclinic" target="_blank">
            Snapchat
        </Link>
    </li>
</ul>
                    </div>
                    <div className="blur1"></div>
                    <div className="blur2"></div>
                    <div className="elip"><Image src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item1"> <span dangerouslySetInnerHTML={{__html : SVGICON.star1}}></span> </div>
                    <div className="item2"> <span dangerouslySetInnerHTML={{__html : SVGICON.star2}}></span> </div>
                    <div className="item3"> <span dangerouslySetInnerHTML={{__html : SVGICON.star3}}></span> </div>
                    <div className="bg-half bg-light"></div>
                </div>
                <section className="content-inner-1 bg-light">
                    <div className="container">
                        <div className="row">
                            {contactusdata.map((data, i) => (
                                <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className={`icon-bx-wraper style-10 bg-white box-hover ${map === data.id ? 'active' : ''}`} onMouseEnter={() => setMap(data.id)}>
                                        <div className="icon-bx bg-secondary">
                                            <span className="icon-cell">
                                                {data.icon}
                                            </span>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title fw-semibold">{data.title}</h5>
                                            {data.para}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
         <section className="clearfix bg-light">
  <div className="container">
    <div className="content-bx style-10 row g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
      <div className="col-md-6">
        <div
          className="dz-media"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "420px",
            height: "100%",
          }}
        >
          <Image
            src="/assets/images/imageupload/contactusbanner/1080x825.jpg"
            alt="Contact banner"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h2 className="title">Want To Schedule An Appointment?</h2>
        <Link href="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
          <span className="w-100">Appointment</span>
          <span className="right-icon">
            <i className="feather icon-arrow-right" />
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>

             <LocationsSection />
            </main>
            <Footer />
        </>
    )
}
export default ContactUs2;
