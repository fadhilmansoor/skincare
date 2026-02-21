import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES, SVGICON } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image";

function Error() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Error 404"} />
                <section className="error-page style-1 content-inner-1 bg-light overflow-hidden">
                    <div className="container">
                        <div className="row align-items-center g-5 justify-content-center">
                            <div className="col-lg-6 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-error-media">
                                    <Image src={IMAGES.error1} alt="error" />
                                    <div className="item1">
                                        <Image src={IMAGES.error2} alt="error" />
                                        <span dangerouslySetInnerHTML={{__html : SVGICON.question}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="inner-content text-center">
                                    <h2 className="dz-error data-name-primary" data-name="404">404</h2>
                                    <p className="text">We are sorry. But the page you are looking for cannot be found.</p>
                                    <Link href="/" className="btn btn-lg btn-primary btn-hover1">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Error;