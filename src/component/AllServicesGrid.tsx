"use client"
import { IMAGES } from "@/constant/theme";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
    { label: "All",            value: "all" },
    { label: "Dental",         value: "dental" },
    { label: "Dermatology",    value: "dermatology" },
    { label: "Aesthetics",     value: "aesthetics" },
    { label: "Hair",           value: "hair" },
];

const SERVICES = [
    // Dental
    { id: 1,  image: IMAGES.servicemiddle1, title: "General Dentistry",                category: "dental",      num: "01" },
    { id: 2,  image: IMAGES.servicemiddle2, title: "Cosmetic Dentistry",               category: "dental",      num: "02" },
    { id: 3,  image: IMAGES.servicemiddle3, title: "Teeth Whitening",                  category: "dental",      num: "03" },
    { id: 4,  image: IMAGES.servicemiddle4, title: "Teeth Cleaning",                   category: "dental",      num: "04" },
    { id: 5,  image: IMAGES.servicemiddle5, title: "Dental Implants",                  category: "dental",      num: "05" },
    { id: 6,  image: IMAGES.servicemiddle1, title: "Veneers",                          category: "dental",      num: "06" },
    { id: 7,  image: IMAGES.servicemiddle2, title: "Orthodontics (Braces & Aligners)", category: "dental",      num: "07" },
    { id: 8,  image: IMAGES.servicemiddle3, title: "Smile Makeover",                   category: "dental",      num: "08" },
    // Dermatology
    { id: 9,  image: IMAGES.servicemiddle4, title: "General Dermatology",              category: "dermatology", num: "09" },
    { id: 10, image: IMAGES.servicemiddle5, title: "Skin Rejuvenation",                category: "dermatology", num: "10" },
    { id: 11, image: IMAGES.servicemiddle1, title: "Laser Treatments",                 category: "dermatology", num: "11" },
    { id: 12, image: IMAGES.servicemiddle2, title: "Laser Hair Removal",               category: "dermatology", num: "12" },
    { id: 13, image: IMAGES.servicemiddle3, title: "Anti-Aging Treatments",            category: "dermatology", num: "13" },
    { id: 14, image: IMAGES.servicemiddle4, title: "Facial Treatments",                category: "dermatology", num: "14" },
    // Aesthetics
    { id: 15, image: IMAGES.servicemiddle5, title: "Botox",                            category: "aesthetics",  num: "15" },
    { id: 16, image: IMAGES.servicemiddle1, title: "Dermal Fillers",                   category: "aesthetics",  num: "16" },
    { id: 17, image: IMAGES.servicemiddle2, title: "Facial Contouring",                category: "aesthetics",  num: "17" },
    { id: 18, image: IMAGES.servicemiddle3, title: "Skin Tightening",                  category: "aesthetics",  num: "18" },
    // Hair
    { id: 19, image: IMAGES.servicemiddle4, title: "Hair Transplant (FUE / DHI)",      category: "hair",        num: "19" },
    { id: 20, image: IMAGES.servicemiddle5, title: "Beard Transplant",                 category: "hair",        num: "20" },
    { id: 21, image: IMAGES.servicemiddle1, title: "Eyebrow Transplant",               category: "hair",        num: "21" },
    { id: 22, image: IMAGES.servicemiddle2, title: "Hair Loss Treatments",             category: "hair",        num: "22" },
];

// Group services by category for section headers
const GROUPED = [
    { key: "dental",      label: "Dental Services" },
    { key: "dermatology", label: "Dermatology" },
    { key: "aesthetics",  label: "Cosmetic Aesthetics" },
    { key: "hair",        label: "Hair Restoration" },
];

export default function AllServicesGrid() {
    const [activeTab, setActiveTab] = useState("all");
    const [hovered,   setHovered]   = useState<number | null>(null);

    const filtered = (cat: string) =>
        SERVICES.filter(s => activeTab === "all" ? s.category === cat : s.category === activeTab && s.category === cat);

    const totalVisible = activeTab === "all"
        ? SERVICES.length
        : SERVICES.filter(s => s.category === activeTab).length;

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
                    {CATEGORIES.map(cat => {
                        const count = cat.value === "all"
                            ? SERVICES.length
                            : SERVICES.filter(s => s.category === cat.value).length;
                        const isActive = activeTab === cat.value;
                        return (
                            <button
                                key={cat.value}
                                onClick={() => setActiveTab(cat.value)}
                                style={{
                                    padding: "10px 22px",
                                    borderRadius: 50,
                                    border: isActive ? "2px solid #1e2d4f" : "2px solid rgba(30,45,79,0.18)",
                                    background: isActive ? "#1e2d4f" : "transparent",
                                    color: isActive ? "#fff" : "#1e2d4f",
                                    fontWeight: isActive ? 700 : 500,
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    transition: "all 0.25s ease",
                                    boxShadow: isActive ? "0 6px 20px rgba(30,45,79,0.25)" : "none",
                                    fontFamily: "inherit",
                                }}
                            >
                                {cat.label}
                                <span style={{ marginLeft: 6, opacity: 0.55, fontSize: "0.75rem" }}>
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
            {GROUPED.map(group => {
                const items = filtered(group.key);
                if (items.length === 0) return null;
                return (
                    <div key={group.key} style={{ marginBottom: 48 }}>
                        {/* Category header — only show when "All" tab is active */}
                        {activeTab === "all" && (
                            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                                <h4 style={{ whiteSpace: "nowrap", fontWeight: 700, color: "#1e2d4f", fontSize: "1.1rem", margin: 0 }}>
                                    {group.label}
                                </h4>
                                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(30,45,79,0.18), transparent)" }} />
                                <span style={{ fontSize: "0.75rem", color: "#aaa", whiteSpace: "nowrap" }}>
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
                                    href="/service-detail"
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
                                            transform: hovered === service.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                            boxShadow: hovered === service.id
                                                ? "0 24px 48px rgba(30,45,79,0.38)"
                                                : "0 4px 16px rgba(30,45,79,0.15)",
                                            transition: "transform 0.35s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s ease",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {/* BG Image */}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            style={{
                                                objectFit: "cover",
                                                opacity: hovered === service.id ? 0.38 : 0.2,
                                                transition: "opacity 0.4s ease",
                                            }}
                                        />

                                        {/* Bottom gradient */}
                                        <div style={{
                                            position: "absolute",
                                            bottom: 0, left: 0, right: 0,
                                            height: "65%",
                                            background: "linear-gradient(to top, rgba(10,18,40,0.88) 0%, transparent 100%)",
                                            zIndex: 1,
                                        }} />

                                        {/* Arrow circle top-left */}
                                        <div style={{
                                            position: "absolute",
                                            top: 14, left: 14,
                                            width: 40, height: 40,
                                            background: "#fff",
                                            borderRadius: "50%",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            zIndex: 3,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            transform: hovered === service.id ? "rotate(-45deg) scale(1.1)" : "rotate(0) scale(1)",
                                            transition: "transform 0.3s ease, background 0.3s ease",
                                            color: hovered === service.id ? "#fff" : "#1e2d4f",
                                            fontSize: 16,
                                            backgroundColor: hovered === service.id ? "var(--primary, #e07b4a)" : "#fff",
                                        } as React.CSSProperties}>
                                            <i className="feather icon-arrow-up-right" />
                                        </div>

                                        {/* Number watermark */}
                                        <div style={{
                                            position: "absolute",
                                            bottom: 8, left: 14,
                                            fontSize: "3.5rem",
                                            fontWeight: 900,
                                            color: "rgba(255,255,255,0.07)",
                                            zIndex: 1,
                                            lineHeight: 1,
                                            userSelect: "none",
                                            transition: "color 0.4s",
                                            ...(hovered === service.id ? { color: "rgba(255,255,255,0.12)" } : {}),
                                        }}>
                                            {service.num}
                                        </div>

                                        {/* Vertical title */}
                                        <div style={{
                                            position: "absolute",
                                            bottom: 0, left: 0, right: 0,
                                            padding: "12px 16px 18px",
                                            zIndex: 2,
                                            display: "flex",
                                            alignItems: "flex-end",
                                        }}>
                                            <span style={{
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
                                            }}>
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

            {/* ── Book CTA ── */}
            <div className="text-center m-t40">
                <Link href="/appointment" className="btn btn-primary btn-lg btn-icon btn-hover1 wow fadeInUp" data-wow-delay="0.2s">
                    Book a Consultation
                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                </Link>
            </div>
        </>
    );
}