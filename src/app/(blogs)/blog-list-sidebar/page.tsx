"use client"
import { Fragment, useState } from "react";
import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import { blogdata, BlogItem} from "@/constant/alldata";
import Image from "next/image";

function BlogListSidebar() {  
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
        <Fragment>
            <Header />
            <main className="page-content">
                <PageBanner title={"Blog List Sidebar"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 m-b30">
                                <div className="row loadmore-content">
                                    {addData.map((data, i) => (
                                        <div className="col-xl-12 col-md-12 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                            <div className="dz-card style-4 blog-half">
                                                <div className="dz-media">
                                                    <Image src={data.image} alt="comman" />
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-date">17 May 2025</li>
                                                            <li className="post-author">By <Link href={"#"} scroll={false}>Nashid Martines</Link></li>
                                                        </ul>
                                                    </div>
                                                    <h3 className="dz-title"><Link href="/blog-details">{data.title}</Link></h3>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                    <Link href="/blog-details" className="btn-link icon-link-hover-end">
                                                        Read more <i className="feather icon-arrow-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center m-t30 m-lg-t0 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <Link href={"#"} scroll={false} className={`btn btn-lg btn-icon btn-secondary ${refresh ? "dz-load-more": ""}`}
                                        onClick={()=>handleMoreItem()}
                                    >
                                        Load More <span className="right-icon">
                                            <i className="feather icon-refresh-ccw" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 m-b30">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />            
        </Fragment>
    )
}
export default BlogListSidebar;
