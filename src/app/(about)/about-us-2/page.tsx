"use client"
import { Fragment, useState } from "react";
import Link from "next/link";
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import PageBanner from "@/component/PageBanner"
import SkinCard1 from "@/component/SkinCard1"
import ChoosePlan from "@/component/ChoosePlan"
import BestDentist from "@/component/BestDentist"
import { marqueelist1, marqueelist2 } from "@/constant/alldata";
import CompareSwiper from "@/component/CompareSwiper";
import Image from "next/image";
import Appointment from "@/component/Appointment";
import { IMAGES } from "@/constant/theme";
import TestimoniulSwiper from "@/component/TestimoniulSwiper";
import ClientLogo2 from "@/component/ClientLogo2";
import { Modal } from "react-bootstrap";

const AboutUs2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <Fragment>
             <Header />
                <main className="page-content">
                    <PageBanner title={"About Us 2"} />
                    <section className="content-inner bg-light">
                        <div className="container">
                            <div className="row content-wrapper style-13">
                                <SkinCard1 />
                            </div>
                        </div>
                    </section>
                    <div className="dz-marquee style-1 bg-secondary overflow-hidden">
                        <ul className="marquee-list">
                            {marqueelist1.map((data, i) => (
                                <li key={i} className="item wow bounceIn" data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                            ))}
                        </ul>
                    </div>
                    <div className="overlay-secondary-light video-wrapper2 bg-img-fix" style={{ backgroundImage: `url(${IMAGES.bg2.src})`, backgroundPosition: 'center' }}>
                        <div className="video-bx2">
                            <Link onClick={() => setModalOpen(true)} href="#" scroll={false} 
                                className="video-btn video-lg popup-youtube"
                            >
                                <i className="fa fa-play" />
                            </Link>                            
                        </div>
                    </div>
                    <section className="content-inner bg-light">
                        <div className="container">
                            <div className="row align-items-center pricingtable-content-wrapper">
                                <ChoosePlan />
                            </div>
                        </div>
                    </section>
                    <div className="dz-marquee style-2 bg-light">
                        <ul className="marquee-list">
                            {marqueelist2.map((data, i) => (
                                <li key={i} className={`item wow bounceIn ${data.columnstand}`} data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
                            ))}
                        </ul>
                    </div>
                    <section className="content-inner-3 bg-light pb-0 overflow-hidden">
                        <div className="container">
                            <div className="row content-wrapper style-17 align-items-end justify-content-center">
                                <BestDentist />
                            </div>
                        </div>
                    </section>
                    <section className="content-inner-1 overflow-hidden">
                        <CompareSwiper />
                    </section>
                    <section className="content-inner-1 p-t0">
                        <Appointment />
                    </section>
                    <Image src={IMAGES.gallery} alt="" className="w-100" />
                    <section className="content-inner pt-0">
                        <div className="container">
                            <div className="section-head style-1 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b10"> What our patient say </h2>
                                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <TestimoniulSwiper />
                        </div>
                    </section>
                    <section className="content-inner-3 bg-light">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-4">
                                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <h2 className="title m-b0">Our Accepted insurance</h2>
                                    </div>
                                </div>
                                <div className="col-xl-8 m-b30">
                                    <ClientLogo2 />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                 <Modal show={modalOpen} onHide={()=>setModalOpen(false)} centered  size={"lg"} className="video-model">                           
                    <video controls style={{width:"100%"}} autoPlay>
                        <source src="/assets/images/demo.mp4" type="video/mp4" />
                    </video>
                </Modal>
        </Fragment>
    )
}

export default AboutUs2;