import Link from "next/link";
import { IMAGES, SVGICON } from "../constant/theme";
import Image from "next/image";

function BestDentist() {
    return (
        <>
            <div className="col-xl-6 col-lg-12 order-xl-1 m-b30">
                <div className="content-info">
                    <div className="section-head style-2 m-b30">
                        <div className="sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s"> Best Dentist </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s"> About Dr. Richarl Nifom </h2>
                        <p className="fw-normal wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                            <strong className="text-secondary fw-semibold">Dr. Richarl Nifom</strong>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <h3 className="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s"> About Skills </h3>
                    <ul className="list-check text-secondary fw-medium grid-2 m-b35 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <li> Radiant Skin Dermatology </li>
                        <li> Flawless Dermatology </li>
                        <li> Luminous Dermatology </li>
                        <li> Laser Resurfacing </li>
                        <li> Refined Skin Dermatology </li>
                        <li> Anti Aging </li>
                    </ul>
                    <div className="row align-items-center g-4 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                        <div className="col-sm-6 d-flex">
                            <div className="text-center">
                                <Image src={IMAGES.sign} alt="sign" />
                                <span className="font-14 d-block">Dr. Richarl Nifom</span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <Link href="/appointment" className="btn btn-lg btn-icon btn-primary"> Appointment
                                <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-8">
                <div className="content-media">
                    <div className="dz-media">
                        <Image src={IMAGES.about5} alt="about" />
                    </div>
                    <div className="item1">
                        <svg viewBox="0 0 694 694" fill="none" xmlns="http://www.w3.org/2000/svg"
                            dangerouslySetInnerHTML={{__html : SVGICON.item1}}
                        >
                        </svg>
                        
                    </div>
                    <div className="item2" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                        <div className="info-widget style-10 move-3">
                            <span className="content-text text-primary"><span className="counter">20</span>+</span>
                            <h3 className="title m-b0"> Years <br /> Experienced </h3>
                        </div>
                    </div>
                    <div className="item3" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                        <div className="dz-img-box style-1 move-4">
                            <div className="dz-media">
                                <Image src={IMAGES.logologo1} alt="logo" />
                            </div>
                            <div className="dz-content">
                                <h3 className="title"> ClinicMaster 2025 </h3>
                                <p> Quality and Accreditation Institute </p>
                                <Link href={"#"} scroll={false} className="btn-link">Best Dermatologists</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestDentist;