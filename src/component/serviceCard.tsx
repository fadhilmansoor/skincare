"use client"
import Link from "next/link"
import type { ServiceContent } from "@/constant/serviceContent"

interface ServiceCardProps {
  service: ServiceContent
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="text-decoration-none d-block h-100"
    >
      <div
        className="service-card h-100 bg-white d-flex flex-column"
        style={{
          borderRadius: "16px",
          padding: "2rem 1.5rem",
          border: "1px solid #eef0f2",
          transition: "all 0.28s ease",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(-6px)"
          el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.10)"
          el.style.borderColor = "var(--primary, #0070f3)"
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(0)"
          el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"
          el.style.borderColor = "#eef0f2"
        }}
      >
        <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          {service.icon}
        </div>
        <h5
          className="title m-b10"
          style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1rem" }}
        >
          {service.title}
        </h5>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#64748b",
            lineHeight: 1.65,
            flexGrow: 1,
            marginBottom: "1.25rem",
          }}
        >
          {service.shortDesc}
        </p>
        <span
          className="text-primary d-flex align-items-center gap-1"
          style={{ fontSize: "0.85rem", fontWeight: 600, marginTop: "auto" }}
        >
          Learn More <i className="feather icon-arrow-right" />
        </span>
      </div>
    </Link>
  )
}