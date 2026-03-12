"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import {
  getServiceBySlug,
  getServicesByCategory,
  serviceCategories,
} from "@/constant/serviceContent";
import MainHeader from "@/layout/MainHeader";
import Image from "next/image";

function ServiceDetail2() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <MainHeader transparent="" />
        <main className="page-content">
          <section className="content-inner text-center">
            <div className="container">
              <h1>Service Not Found</h1>
              <p>The service you are looking for does not exist.</p>
              <Link href="/services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const relatedServices = getServicesByCategory(service.categoryId)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const catInfo = serviceCategories.find((c) => c.id === service.categoryId);

  return (
    <>
      <MainHeader transparent="" />
      <main className="page-content">
        {/* ── HERO ─────────────────────────────────────────── */}
        <div
          className="dz-bnr-inr style-1 detail-bx overlay-secondary-dark dz-bnr-inr-md"
          style={{ backgroundImage: `url(${IMAGES.bnr1.src})` }}
        >
          <div className="container">
            <div className="dz-bnr-inr-entry row">
              <div className="col-xl-6 col-lg-7">
                <div className="dz-bnr-bx">
                  <nav className="breadcrumb-premium">
                    <ol className="breadcrumb">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href={`/services#${service.categoryId}`}>
                          {service.category}
                        </Link>
                      </li>
                      <li className="active">{service.title}</li>
                    </ol>
                  </nav>

                  <span
                    className="badge bg-primary mb-2"
                    style={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.category}
                  </span>

                  <h1>{service.title}</h1>
                  <p>{service.heroDesc}</p>

                  <div className="d-flex flex-wrap align-items-center bottom-info">
                    <Link
                      href="/appointment"
                      className="btn btn-lg btn-icon btn-primary btn-shadow m-r40 mb-3 mb-sm-0"
                    >
                      Book Appointment
                      <span className="right-icon">
                        <i className="feather icon-arrow-right" />
                      </span>
                    </Link>

                    <div className="info-widget style-5">
                      <div className="widget-media text-primary">
                        <i className="feather icon-phone-call dz-ring-effect" />
                      </div>
                      <div className="widget-content">
                        <h6 className="title">Call Us</h6>
                        <Link href="tel:+97143333108" className="text-secondary">
                          +971 433 33108
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dz-media">
            <Image
              src={service.bannerImage || IMAGES.servicebnr2}
              alt={service.title}
              width={700}
              height={700}
              priority
            />
          </div>
        </div>

        {/* ── STEPS ────────────────────────────────────────────────────── */}
        <section className="content-inner">
          <div className="container">
            <div className="sd2-steps-line-wrap">
              <div className="row g-0">
                {service.steps.map((step, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="sd2-step-minimal">
                      <div className="sd2-step-minimal__line" />
                      <div className="sd2-step-minimal__num">{step.num}</div>

                      <div className="sd2-step-minimal__content">
                        <h3 className="sd2-step-minimal__title">{step.title}</h3>
                        <p className="sd2-step-minimal__desc">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IS ──────────────────────────────────────────────────── */}
        <section className="content-wrapper style-23 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="content-media sd2-img-frame">
                  <Image
                    src={service.contentImage || IMAGES.service1}
                    alt={service.title}
                    width={600}
                    height={700}
                    className="object-fit-cover"
                  />
                  <div className="sd2-img-badge">
                    <span className="sd2-img-badge__star">✦</span>
                    <div>
                      <strong>FDA Approved</strong>
                      <span>Technology</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 col-lg-6 align-self-center">
                <div className="content-info">
                  <div className="section-head style-1">
                    <span className="sd2-eyebrow">Understanding the Treatment</span>
                    <h2 className="title m-b15">What is {service.title}?</h2>
                    <p>{service.whatIs}</p>
                  </div>

                  <div className="section-head style-1 m-b30">
                    <span className="sd2-eyebrow">Why Choose Us</span>
                    <h2 className="title m-b15">Benefits of {service.title}</h2>
                    <p>Our evidence-based approach ensures safe and effective results.</p>
                  </div>

                  <ul className="sd2-benefits-list">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="sd2-benefit-item">
                        <div className="sd2-benefit-item__icon">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <h6 className="sd2-benefit-item__title">{benefit.title}</h6>
                          <p className="sd2-benefit-item__desc">{benefit.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
        {relatedServices.length > 0 && (
          <section className="content-inner">
            <div className="container">
              <div className="section-head style-1 text-center m-b30">
                <span className="sd2-eyebrow" style={{ justifyContent: "center" }}>
                  Explore More
                </span>
                <h2 className="title m-b10">
                  Other {catInfo?.title ?? service.category} Services
                </h2>
                <p>Explore other treatments in our {service.category} programme.</p>
              </div>

              <div className="row justify-content-center">
                {relatedServices.map((related) => (
                  <div key={related.id} className="col-xl-4 col-md-6 m-b30">
                    <Link
                      href={`/services/${related.slug}`}
                      className="sd2-rcard"
                    >
                      <div className="sd2-rcard__bar" />

                      {/* <div className="sd2-rcard__image">
                        <Image
                          src={
                            related.cardImage ||
                            related.bannerImage ||
                            IMAGES.service1
                          }
                          alt={related.title}
                          width={400}
                          height={250}
                          className="object-fit-cover"
                        />
                      </div> */}

                      <div className="sd2-rcard__top">
                        <span className="sd2-rcard__cat">{related.category}</span>
                        <div className="sd2-rcard__arrow">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      <div className="sd2-rcard__body">
                        <h4 className="sd2-rcard__title">{related.title}</h4>
                        <p className="sd2-rcard__desc">{related.shortDesc}</p>
                      </div>

                      <div className="sd2-rcard__foot">
                        <span className="sd2-rcard__tag">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                            <line x1="7" y1="7" x2="7.01" y2="7" />
                          </svg>
                          {related.tags?.[0] ?? related.category}
                        </span>
                        <span className="sd2-rcard__learn">
                          Learn More
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="content-inner-2">
          <div className="container">
            <div className="content-bx style-10 row g-0">
              <div className="col-md-8 align-self-center">
                <h2 className="title m-b10">
                  Ready to Begin Your {service.title} Journey?
                </h2>
                <p>
                  Book a consultation today and take the first step towards your best
                  self.
                </p>
              </div>
              <div className="col-md-4 align-self-center text-md-end">
                <Link
                  href="/appointment"
                  className="btn btn-lg btn-icon btn-primary btn-shadow"
                >
                  <span className="w-100">Book Appointment</span>
                  <span className="right-icon">
                    <i className="feather icon-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServiceDetail2;