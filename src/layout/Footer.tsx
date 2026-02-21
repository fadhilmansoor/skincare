"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { footermenu, footermenu2 } from "../constant/alldata";
import {  useRef } from "react";
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
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    let year = new Date().getFullYear();
    return (
        <>
            <footer className="site-footer style-2 footer-dark background-blend-luminosity" style={{ backgroundImage: `URL(${IMAGES.bg1.src})` }}>
                <div className="footer-head">
                    <div className="container">
                        <div className="fh-inner">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5 text-center text-md-start wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <div className="footer-logo logo-white">
                                        <Link href="/"><Image src={IMAGES.logowhite} alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7 text-center text-md-end wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <div className="m-b25">
                                        <Link href="/contact-us" className="btn btn-lg btn-outline-white btn-hover1"> Contact Us </Link>
                                        <Link href="/appointment" className="btn btn-lg btn-white text-primary btn-hover1 m-l20"> Appointment </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <h2 className="footer-title">Important Updates <br />Waiting for you</h2>
                                    <p>Get our latest and best contents right into your inbox</p>
                                    <form className="dzSubscribe style-1" ref={form} onSubmit={handleSubmit} >
                                        <div className="dzSubscribeMsg"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required type="email" className="form-control form-btn-square" placeholder="Your Email Address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-sm">
                                                        <i className="flaticon-message" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-9 col-sm-12 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="row">
                                    {footermenu.map((data, i) => (
                                        <div className="col-xl-3 col-md-3 col-6" key={i}>
                                            <div className="widget widget_services">
                                                <h2 className="footer-title">{data.title}</h2>
                                                <ul className="list-hover1">
                                                    <li><Link href={data.link1}><span>{data.span1}</span></Link></li>
                                                    <li><Link href={data.link2}><span>{data.span2}</span></Link></li>
                                                    <li><Link href={data.link3}><span>{data.span3}</span></Link></li>
                                                    <li><Link href={data.link4}><span>{data.span4}</span></Link></li>
                                                    <li><Link href={data.link5}><span>{data.span5}</span></Link></li>
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
                                <div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h3 className="title">Get in Touch with us</h3>
                                    <p className="text">Lorem Ipsum is simply dummy</p>
                                </div>
                                {footermenu2.map((data, i) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={i}>
                                        <div className="icon-bx-wraper style-1">
                                            <div className="icon-bx bg-primary">
                                                <span className="icon-cell">
                                                    {data.icon}
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title">{data.title}</h5>
                                                <p><Link href={"#"} scroll={false} className="text-body">{data.paragraph}</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-start">
                                    <p className="copyright-text">© <span className="current-year">{year}</span> <Link href="https://themeforest.net/user/dexignzone" target="_blank">DexignZone</Link> Theme. All Rights Reserved.</p>
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
    )
}
export default Footer;