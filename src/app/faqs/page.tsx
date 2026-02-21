import Link from "next/link";
import ChoosePlan from "@/component/ChoosePlan";
import Frequently from "@/component/Frequently";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import CompareSwiper from "@/component/CompareSwiper";
import Image from "next/image";


function FaqsPage() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Faq's"} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-5 align-items-center">
                            <Frequently />
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row align-items-center pricingtable-content-wrapper">
                            <ChoosePlan />
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 p-t0">
                    <div className="container">
                        <div className="content-bx style-10 row g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="col-md-6">
                                <div className="dz-media">
                                    <Image src={IMAGES.about8} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="title">Want To Schedule An Appointment?</h2>
                                <Link href="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                    <span className="w-100">Appointment</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 overflow-hidden">
                    <CompareSwiper />
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default FaqsPage;