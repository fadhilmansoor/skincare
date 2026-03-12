import Link from "next/link";
import Image from "next/image";
import { appointmentmapdata } from "@/constant/alldata";

export default function LocationsSection() {
  return (
    <section className="content-inner">
      <div className="container">

        <div className="section-head style-3 text-center m-b40">
          <h2 className="title">All Locations</h2>
        </div>

        <div className="row justify-content-center">

          {appointmentmapdata.map((data, i) => (

            <div className="col-xl-4 col-md-6 m-b30" key={i}>

              <div className="dz-img-box style-4">

                {/* Title */}
                <div className="dz-head">
                  <h3 className="title m-b10">
                    <Image
                      src={data.image1}
                      alt={data.title}
                      width={24}
                      height={24}
                      style={{ marginRight: "8px" }}
                    />
                    {data.title}
                  </h3>
                </div>

                {/* Map */}
                <div className="dz-media">
                  <iframe
                    src={data.map}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "10px" }}
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Address */}
                <div className="dz-content">
                  <p className="m-b10">{data.address}</p>

                  <Link href={`tel:${data.phone}`} className="text-body">
                    {data.phone}
                  </Link>
                </div>

                {/* Direction */}
                <div className="dz-footer">
                  <Link
                    href={data.direction}
                    target="_blank"
                    className="icon-link-hover-end"
                  >
                    Get Directions
                    <i className="feather icon-arrow-up-right" />
                  </Link>
                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}