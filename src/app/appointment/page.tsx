import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES, SVGICON } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { appointmentmapdata } from "@/constant/alldata";
import FormBody from "@/component/FormBody";
import Image from "next/image";
import LocationsSection from "@/component/LocationsSection";

function Appointment() {
  return (
    <>
      <Header />

      <main className="page-content">

        <PageBanner title={"Appointment"} />

        {/* FORM SECTION */}
        <section className="content-inner bg-light pb-0 overflow-hidden">
          <div className="container">
            <div className="row content-wrapper style-17 align-items-end justify-content-center">

              <div
                className="col-xl-5 col-lg-12 order-xl-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="content-info">
                  <div className="form-wrapper style-2 bg-secondary">
                    <FormBody />
                  </div>
                </div>
              </div>

              <div
                className="col-xl-7 col-lg-8 pe-xl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="content-media">

                  <div className="dz-media">
                    <Image src={IMAGES.about5} alt="" />
                  </div>

                  <div className="item1">
                    <span
                      dangerouslySetInnerHTML={{ __html: SVGICON.item11 }}
                    ></span>
                  </div>

                  <div className="item2">
                    <div className="info-widget style-10 move-3">
                      <span className="content-text text-primary">
                        <span className="counter">20</span>+
                      </span>
                      <h3 className="title m-b0">
                        Years <br /> Experienced
                      </h3>
                    </div>
                  </div>

                  <div className="item3">
                    <div className="dz-img-box style-1 move-4">
                      <div className="dz-media">
                        <Image src={IMAGES.logologo1} alt="" />
                      </div>
                      <div className="dz-content">
                        <h3 className="title">ClinicMaster 2025</h3>
                        <p>Quality and Accreditation Institute</p>
                        <Link href={"#"} className="btn-link">
                          Best Dermatologists
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* LOCATIONS SECTION */}
<LocationsSection />
      </main>

      <Footer />
    </>
  );
}

export default Appointment;