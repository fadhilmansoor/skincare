"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allServicesContent, serviceCategories } from "@/constant/serviceContent";

// ── Filter tab config ──────────────────────────────────────
const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Dental", value: "dental" },
  { label: "Dermatology", value: "dermatology" },
  { label: "Aesthetics", value: "cosmetic" },
  { label: "Hair", value: "hair" },
];

// fallback image
const FALLBACK_IMAGE = "/assets/images/default-service.jpg";

// ── Build flat list from serviceContent using each service's own bannerImage ──
const SERVICES = allServicesContent.map((s, idx) => ({
  id: s.id,
  slug: s.slug,
  title: s.title,
  category: s.categoryId,
  num: String(idx + 1).padStart(2, "0"),
  image: s.bannerImage || FALLBACK_IMAGE,
}));

// ── Section group labels (from serviceCategories) ─────────
const GROUPED = serviceCategories.map((cat) => ({
  key: cat.id,
  label: cat.title,
}));

export default function AllServicesGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = (catKey: string) =>
    SERVICES.filter((s) =>
      activeTab === "all"
        ? s.category === catKey
        : s.category === activeTab && s.category === catKey
    );

  const totalVisible =
    activeTab === "all"
      ? SERVICES.length
      : SERVICES.filter((s) => s.category === activeTab).length;

  return (
    <>
      {/* ── Filter Tabs ── */}
      <div
        className="wow fadeInUp"
        data-wow-delay="0.3s"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 36,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === "all"
                ? SERVICES.length
                : SERVICES.filter((s) => s.category === cat.value).length;

            const isActive = activeTab === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 50,
                  border: isActive
                    ? "2px solid #1e2d4f"
                    : "2px solid rgba(30,45,79,0.18)",
                  background: isActive ? "#1e2d4f" : "transparent",
                  color: isActive ? "#fff" : "#1e2d4f",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive
                    ? "0 6px 20px rgba(30,45,79,0.25)"
                    : "none",
                  fontFamily: "inherit",
                }}
              >
                {cat.label}
                <span
                  style={{
                    marginLeft: 6,
                    opacity: 0.55,
                    fontSize: "0.75rem",
                  }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        <span style={{ fontSize: "0.82rem", color: "#888" }}>
          Showing <strong>{totalVisible}</strong> services
        </span>
      </div>

      {/* ── Grouped Sections ── */}
      {GROUPED.map((group) => {
        const items = filtered(group.key);
        if (items.length === 0) return null;

        return (
          <div key={group.key} style={{ marginBottom: 48 }}>
            {activeTab === "all" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: 20,
                }}
              >
                <h4
                  style={{
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    color: "#1e2d4f",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  {group.label}
                </h4>

                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background:
                      "linear-gradient(to right, rgba(30,45,79,0.18), transparent)",
                  }}
                />

                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#aaa",
                    whiteSpace: "nowrap",
                  }}
                >
                  {items.length} services
                </span>
              </div>
            )}

            {/* Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: 14,
              }}
            >
              {items.map((service, idx) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="wow fadeInUp"
                    data-wow-delay={`${0.05 + idx * 0.04}s`}
                    style={{
                      position: "relative",
                      borderRadius: 18,
                      overflow: "hidden",
                      aspectRatio: "3 / 4",
                      background: "#1e2d4f",
                      transform:
                        hovered === service.id
                          ? "translateY(-8px) scale(1.02)"
                          : "translateY(0) scale(1)",
                      boxShadow:
                        hovered === service.id
                          ? "0 24px 48px rgba(30,45,79,0.38)"
                          : "0 4px 16px rgba(30,45,79,0.15)",
                      transition:
                        "transform 0.35s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s ease",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      style={{
                        objectFit: "cover",
                        opacity: hovered === service.id ? 0.55 : 0.35,
                        transition: "opacity 0.4s ease",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.35) 45%, rgba(10,18,40,0.12) 100%)",
                        zIndex: 1,
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 3,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        transform:
                          hovered === service.id
                            ? "rotate(-45deg) scale(1.1)"
                            : "rotate(0) scale(1)",
                        transition:
                          "transform 0.3s ease, background 0.3s ease",
                        color: hovered === service.id ? "#fff" : "#1e2d4f",
                        fontSize: 16,
                        backgroundColor: hovered === service.id
                          ? "var(--primary, #e07b4a)"
                          : "#fff",
                      }}
                    >
                      <i className="feather icon-arrow-up-right" />
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        left: 14,
                        fontSize: "3.5rem",
                        fontWeight: 900,
                        color:
                          hovered === service.id
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(255,255,255,0.07)",
                        zIndex: 1,
                        lineHeight: 1,
                        userSelect: "none",
                        transition: "color 0.4s",
                      }}
                    >
                      {service.num}
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "12px 16px 18px",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <span
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.88rem",
                          lineHeight: 1.3,
                          letterSpacing: "0.3px",
                          maxHeight: 180,
                          overflow: "hidden",
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="text-center m-t40">
        <Link
          href="/appointment"
          className="btn btn-primary btn-lg btn-icon btn-hover1 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          Book a Consultation
          <span className="right-icon">
            <i className="feather icon-arrow-right" />
          </span>
        </Link>
      </div>
    </>
  );
}