"use client"
import RotateBoxModal from "@/component/RotateBoxModal";
import { IMAGES, SVGICON } from "@/constant/theme";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Modal } from "react-bootstrap";

// Add your 5 hero images here
const CAROUSEL_IMAGES = [
    { src: IMAGES.herobanner,  alt: "Hero Banner 1" },
    { src: IMAGES.herobanner2, alt: "Hero Banner 2" },
    { src: IMAGES.herobanner3, alt: "Hero Banner 3" },
    { src: IMAGES.herobanner4, alt: "Hero Banner 4" },
    { src: IMAGES.herobanner,  alt: "Hero Banner 5" }, // replace with IMAGES.herobanner5
];

const AUTOPLAY_DELAY = 4000;

const HeroBanner = () => {
    const [modalOpen, setModalOpen]   = useState(false);
    const [current,   setCurrent]     = useState(0);
    const [animating, setAnimating]   = useState(false);
    const [direction, setDirection]   = useState<"left" | "right">("right");

    const goTo = useCallback((index: number, dir: "left" | "right") => {
        if (animating) return;
        setAnimating(true);
        setDirection(dir);
        setTimeout(() => {
            setCurrent(index);
            setAnimating(false);
        }, 400);
    }, [animating]);

    const prev = () => {
        const idx = (current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
        goTo(idx, "left");
    };

    const next = useCallback(() => {
        const idx = (current + 1) % CAROUSEL_IMAGES.length;
        goTo(idx, "right");
    }, [current, goTo]);

    // Autoplay
    useEffect(() => {
        const timer = setInterval(next, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <>
            <div className="hero-banner style-3">
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row align-items-center h-100">
                            {/* ── Left text column ── */}
                            <div className="col-md-6">
                                <div className="hero-content">
                                    <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        Skincare is Like A Workout For Your Skin
                                    </h1>
                                    <div className="content-bx style-2 secondary m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        Experienced staff is dedicated to improving our patients' dental health and enhancing
                                    </div>
                                    <div className="d-flex">
                                        <Link href="/appointment" className="btn btn-lg btn-icon btn-primary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <div className="avatar-group m-l50 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar1} alt="avatr1" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar2} alt="avatr2" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar3} alt="avatr3" />
                                            <Image className="avatar avatar-lg rounded-circle" src={IMAGES.smallavatar4} alt="avatr4" />
                                            <Link
                                                href="/about-us"
                                                className="avatar btn btn-square btn-lg btn-white btn-shadow btn-rounded"
                                                dangerouslySetInnerHTML={{ __html: SVGICON.arrowup }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Right carousel column ── */}
                            <div className="col-md-6 align-self-end wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s" style={{ overflow: "visible" }}>
                                {/* Outer wrapper: same as original — allows item5 to overflow naturally */}
                                <div
                                    className="hero-thumbnail"
                                    data-bottom-top="transform: translateY(-50px)"
                                    data-top-bottom="transform: translateY(50px)"
                                    style={{ position: "relative", overflow: "visible" }}
                                >
                                    {/* Carousel image area — clipped, sized to match original image */}
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            maxWidth: "700px",
                                            aspectRatio: "700 / 860",
                                            overflow: "hidden",
                                            borderRadius: "inherit",
                                        }}
                                    >
                                        {/* Slides */}
                                        {CAROUSEL_IMAGES.map((img, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    opacity: i === current ? 1 : 0,
                                                    transform: i === current
                                                        ? "translateX(0)"
                                                        : direction === "right"
                                                            ? "translateX(40px)"
                                                            : "translateX(-40px)",
                                                    transition: "opacity 0.45s ease, transform 0.45s ease",
                                                    zIndex: i === current ? 2 : 1,
                                                }}
                                            >
                                                <Image
                                                    className="thumbnail hero-img"
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        ))}

                                        {/* Prev Button */}
                                        <button
                                            onClick={prev}
                                            className="carousel-btn prev-btn"
                                            aria-label="Previous image"
                                        >
                                            <i className="feather icon-chevron-left" />
                                        </button>

                                        {/* Next Button */}
                                        <button
                                            onClick={next}
                                            className="carousel-btn next-btn"
                                            aria-label="Next image"
                                        >
                                            <i className="feather icon-chevron-right" />
                                        </button>

                                        {/* Dot indicators */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: 16,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                display: "flex",
                                                gap: 8,
                                                zIndex: 10,
                                            }}
                                        >
                                            {CAROUSEL_IMAGES.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => goTo(i, i > current ? "right" : "left")}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                    style={{
                                                        width: i === current ? 24 : 8,
                                                        height: 8,
                                                        borderRadius: 4,
                                                        border: "none",
                                                        background: i === current ? "var(--primary, #fff)" : "rgba(255,255,255,0.5)",
                                                        transition: "all 0.3s ease",
                                                        cursor: "pointer",
                                                        padding: 0,
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        {/* Slide counter badge */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: 16,
                                                right: 16,
                                                background: "rgba(0,0,0,0.45)",
                                                backdropFilter: "blur(6px)",
                                                color: "#fff",
                                                borderRadius: 50,
                                                padding: "4px 14px",
                                                fontSize: "0.78rem",
                                                fontWeight: 600,
                                                zIndex: 10,
                                                letterSpacing: 1,
                                            }}
                                        >
                                            {current + 1} / {CAROUSEL_IMAGES.length}
                                        </div>
                                    </div>

                                    {/* item5 — right edge of image, vertically centered in bottom half */}
                                    <div
                                        className="item5"
                                        data-bottom-top="transform: translateY(-50px)"
                                        data-top-bottom="transform: translateY(50px)"
                                        style={{
                                            position: "absolute",
                                            bottom: "18%",
                                            right: "-60px",
                                            zIndex: 20,
                                        }}
                                    >
                                        <Link
                                            href="#"
                                            scroll={false}
                                            onClick={() => setModalOpen(true)}
                                            className="popup-youtube"
                                        >
                                            <RotateBoxModal />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Floating items (unchanged) ── */}
                        <div className="item1">
                            <div className="widget-rating1">
                                <ul className="star-list">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                                <span className="rating text-primary m-r5">(4.8)</span>
                                <span className="text">12k+ ratings on google</span>
                            </div>
                        </div>
                        <div className="item2 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <div className="dz-media2">
                                <Image src={IMAGES.herobanner2} alt="item2" />
                            </div>
                        </div>
                        <div className="item3 move-3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <Image src={IMAGES.herobanner3} alt="item3" />
                        </div>
                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                            <Image src={IMAGES.herobanner4} alt="item4" />
                        </div>

                        <svg className="shape1" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                            dangerouslySetInnerHTML={{ __html: SVGICON.shape1 }}
                        />
                        <svg className="shape2" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                            dangerouslySetInnerHTML={{ __html: SVGICON.shape2 }}
                        />
                    </div>
                </div>

                <div className="vertical-info left">
                    <ul className="social-list">
                        <li><Link href="https://www.instagram.com/dexignzone/" target="_blank">Instagram</Link></li>
                        <li><Link href="https://www.facebook.com/dexignzone" target="_blank">Facebook</Link></li>
                        <li><Link href="https://x.com/dexignzone" target="_blank">twitter</Link></li>
                    </ul>
                    <Link href={"#"} scroll={false} className="btn btn-white btn-sm px-2 py-3 btn-shadow rounded">LET'S TALK</Link>
                </div>
                <div className="banner-shape4" />
                <div className="banner-shape5" />
                <div className="banner-shape6" />
            </div>

            {/* Video Modal */}
            <Modal show={modalOpen} onHide={() => setModalOpen(false)} centered size="lg" className="video-model">
                <video controls style={{ width: "100%" }} autoPlay>
                    <source src="/assets/images/demo.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    );
};

export default HeroBanner;