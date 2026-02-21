"use client"
import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import TestimoniulSwiper from "@/component/TestimoniulSwiper";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { testimonialdata2, testimonialdata3 } from "@/constant/alldata";
import Image from "next/image";
import { Modal } from "react-bootstrap";

type Testimonial = {
  id: number;
  name?: string;
  post? : string;
  delay? : string  
};

function Testimonial() {
    const [isOpen, setOpen] = useState(false);
    const [itemlData, setItemlData] = useState<Testimonial[]>(testimonialdata2);

    const handleAddMore = () => {
        if (itemlData.length === 0) return;
        const itemToRepeat = itemlData[0];
        const newItem: Testimonial = {
             ...itemToRepeat,
            id: itemlData.length + 1,         
        };
        setItemlData(prev => [...prev, newItem]);
    };
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Testimonial"} />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row m-b20 loadmore-content">
                            {itemlData.map((data, i) => (
                                <div key={i} className="col-lg-6 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                                    <div className="testimonial-6">
                                        <div className="testimonial-info">
                                            <div className="testimonial-text">
                                                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English. </p>
                                            </div>
                                        </div>
                                        <div className="testimonial-detail">
                                            <h5 className="testimonial-name"> {data.name}  </h5>
                                            <span className="testimonial-position">{data.post}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="dz-separator style-3">
                            <Link href={"#"} scroll={false} className="btn separator-badge dz-load-more"
                                onClick={handleAddMore}
                            >
                                Load  More
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b0"> Video Testimonials. </h2>
                        </div>
                        <div className="row">
                            {testimonialdata3.map((data, i) => (
                                <div key={i} className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                                    <div className="testimonial-5">
                                        <div className="testimonial-media">
                                            <Image src={data.image} alt="" />
                                            <Link onClick={() => setOpen(true)} href="#" scroll={false} className="video-btn popup-youtube">
                                                <i className="fa fa-play" />
                                            </Link>
                                        </div>
                                        <div className="testimonial-detail">
                                            <div className="dz-media">
                                                <Image src={data.image2} alt="" />
                                            </div>
                                            <div className="clearfix">
                                                <h5 className="testimonial-name"> {data.title} </h5>
                                                <span className="testimonial-position">{data.post}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Image src={IMAGES.gallery} alt="gallery" className="w-100" />
                <section className="content-inner pt-0">
                    <div className="container">
                        <div className="section-head style-1 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b10"> What our patient say </h2>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <TestimoniulSwiper />
                    </div>
                </section>
            </main>
            <Footer />                       
            <Modal show={isOpen}  onHide={()=>setOpen(false)} centered size={"lg"}>                
                <video controls style={{width:"100%"}} autoPlay>
                    <source src="/assets/images/demo.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    )
}
export default Testimonial;
