"use client"
import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import { blogdata, BlogItem } from "@/constant/alldata";
import { blogPosts } from "@/constant/blogData";   // ← ADD THIS IMPORT
import Image from "next/image";
import { useState } from "react";

function BlogGrid() {
    const [addData, setAddData] = useState<BlogItem[]>(blogdata);
    const [refresh, setRefresh] = useState(false);

    const handleMoreItem = (): void => {
        setRefresh(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * addData.length);
            const randomItem = addData[randomIndex];
            setAddData(prevData => [...prevData, randomItem]);
            setRefresh(false);
        }, 1000);
    };

    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Health & Beauty Blog"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 m-b30">
                                <div className="row loadmore-content">
                                    {addData.map((data, i) => {
                                        const post = blogPosts[i % blogPosts.length]; // ← READS FROM blogData.ts
                                        return (
                                            <div className="col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                                <div className="dz-card style-4">
                                                    <div className="dz-media">
                                                        <Image src={data.image} alt={post.title} />
                                                    </div>
                                                    <div className="dz-info">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">{post.date}</li>
                                                                <li className="post-author">By <Link href={`/blog-details?slug=${post.slug}`} scroll={false}>{post.author}</Link></li>
                                                            </ul>
                                                        </div>
                                                        <h3 className="dz-title">
                                                            <Link href={`/blog-details?slug=${post.slug}`}>{post.title}</Link>
                                                        </h3>
                                                        <p>{post.excerpt}</p>
                                                        <Link href={`/blog-details?slug=${post.slug}`} className="btn-link icon-link-hover-end">
                                                            Read more <i className="feather icon-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="text-center m-t30 m-lg-t0 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <Link
                                        href={"#"}
                                        scroll={false}
                                        className={`btn btn-lg btn-icon btn-secondary ${refresh ? "dz-load-more" : ""}`}
                                        onClick={() => handleMoreItem()}
                                    >
                                        Load More
                                        <span className="right-icon">
                                            <i className="feather icon-refresh-ccw"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default BlogGrid;