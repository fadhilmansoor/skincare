"use client"
import Link from "next/link";
import { IMAGES, SVGICON } from "../constant/theme";
import Accordion from 'react-bootstrap/Accordion';
import { accordiandata } from "../constant/alldata";
import Image from "next/image";
import { Fragment } from "react";

function Frequently() {
    return (
        <>
            <div className="col-xxl-7 col-lg-6 m-b30 align-self-center">
                <div className="content-info">
                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title"> Frequently Asked Questions </h2>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>                   
                    
                    <Accordion className="accordion dz-accordion style-3 m-b30" defaultActiveKey="0">
                        {accordiandata.map((data, i) => (
                            <Accordion.Item eventKey={data.key} key={i}>
                                <Accordion.Header>{data.title}</Accordion.Header>                                
                                <Accordion.Body>
                                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                </Accordion.Body>
                                
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    <div className="d-flex align-items-center m-b15 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <div className="info-widget style-12 m-r40 shadow-sm">
                            <div className="avatar-group">
                                <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar1} alt="avatar1" />
                                <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar2} alt="avatar2" />
                                <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar3} alt="avatar3" />
                                <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar4} alt="avatar4" />
                            </div>
                            <div className="clearfix">
                                <span>Talk to over 215 doctor</span>
                            </div>
                        </div>
                        <Link href="/about-us-2" className="btn btn-square btn-xl btn-white shadow-sm btn-rounded"
                            dangerouslySetInnerHTML={{__html : SVGICON.arrowup}}
                        >                            
                        </Link>
                    </div>
                    <div className="widget-rating3 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                        <ul className="star-list">
                            <li> <i className="fa fa-star" /> </li>
                            <li> <i className="fa fa-star" /> </li>
                            <li> <i className="fa fa-star" /> </li>
                            <li> <i className="fa fa-star" /> </li>
                            <li> <i className="fa fa-star" /> </li>
                        </ul>
                        <span className="rating me-2">(4.8)</span>
                        <span className="text">12k+ ratings on google</span>
                    </div>
                </div>
            </div>
            <div className="col-xxl-5 col-lg-6 m-b30">
                <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                    <div className="dz-media">
                        <Image src={IMAGES.about4} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Frequently;