import Link from "next/link";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { SVGICON } from "@/constant/theme";

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="page-content">
        <section
          className="content-inner"
          style={{ background: "var(--bs-light)", minHeight: "80vh" }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
              <div className="col-lg-7 col-md-9 text-center wow fadeInUp" data-wow-delay="0.2s">

                {/* Animated checkmark circle */}
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle bg-primary"
                  style={{ width: 100, height: 100, animation: "pulse 2s infinite" }}
                >
                  <i className="feather icon-check" style={{ fontSize: 48, color: "#fff" }} />
                </div>

                {/* Decorative SVG star */}
                <div className="mb-3" style={{ opacity: 0.15 }}>
                  <span dangerouslySetInnerHTML={{ __html: SVGICON.star1 }} />
                </div>

                <h1
                  className="fw-semibold mb-3"
                  style={{ color: "var(--bs-heading-color)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
                >
                  Appointment Requested!
                </h1>

                <p className="text-body fs-5 mb-2">
                  Thank you for reaching out to <strong className="text-primary">ClinicMaster</strong>.
                </p>
                <p className="text-body mb-5">
                  We've received your appointment request and sent a confirmation to your email.
                  Our team will contact you shortly to confirm your slot.
                </p>

                {/* Info cards */}
                <div className="row g-3 mb-5 text-start">
                  {[
                    { icon: "icon-clock", title: "Response Time", text: "We typically confirm within 2–4 hours during business hours." },
                    { icon: "icon-phone", title: "Need Urgent Help?", text: "Call us directly and we'll assist you right away." },
                    { icon: "icon-mail", title: "Check Your Email", text: "A confirmation has been sent to your inbox." },
                  ].map(({ icon, title, text }) => (
                    <div className="col-sm-4" key={title}>
                      <div
                        className="bg-white rounded p-3 h-100"
                        style={{ border: "1px solid var(--bs-border-color)", boxShadow: "var(--bs-box-shadow-sm)" }}
                      >
                        <div
                          className="icon-bx mb-2 d-flex align-items-center justify-content-center rounded-circle bg-secondary"
                          style={{ width: 44, height: 44 }}
                        >
                          <i className={`feather ${icon}`} style={{ color: "#fff", fontSize: 18 }} />
                        </div>
                        <h6 className="fw-semibold mb-1" style={{ color: "var(--bs-heading-color)" }}>{title}</h6>
                        <p className="text-body mb-0" style={{ fontSize: "0.85rem" }}>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link href="/" className="btn btn-lg btn-primary btn-shadow">
                    <i className="feather icon-home m-r5" /> Back to Home
                  </Link>
                  <Link href="/appointment" className="btn btn-lg btn-outline-secondary">
                    <i className="feather icon-calendar m-r5" /> Book Another
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

     <style>{`
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,189,224,0.4); }
    50% { box-shadow: 0 0 0 20px rgba(0,189,224,0); }
  }
`}</style>
    </>
  );
}