"use client"
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Sidebar from "@/component/Sidebar";
import Link from "next/link";
import MainHeader from "@/layout/MainHeader";
import { useRef } from "react";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";
import { useSearchParams } from "next/navigation";      // ← ADD THIS
import { blogPosts } from "@/constant/blogData";        // ← ADD THIS

function BlogDetails() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");
    const post = blogPosts.find(p => p.slug === slug) ?? blogPosts[0]; // ← FINDS POST BY SLUG

    const avatars = [IMAGES.avtarmiddle1jpg, IMAGES.avtarmiddle2jpg];

    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };

    return (
        <>
            <MainHeader transparent="" />
            <main className="page-content">
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <div className="dz-blog blog-single sidebar style-1">

                                    <h1 className="dz-title">{post.title}</h1>

                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">{post.date}</li>
                                            <li className="dz-user">
                                                <i className="fa-solid fa-user" />
                                                By <Link href={"#"} scroll={false}>{post.author}</Link>
                                            </li>
                                            <li className="dz-comment">
                                                <i className="fa-solid fa-message" />
                                                <Link href={"#"} scroll={false}>{post.comments} Comments</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dz-media rounded">
                                        <Image src={IMAGES.blog1} alt={post.title} />
                                    </div>

                                    <div className="dz-info">
                                        <div className="dz-post-text">

                                            <p>{post.body_1}</p>

                                            <blockquote className="wp-block-quote is-style-default bg-white">
                                                <p>{post.quote}</p>
                                                <cite>{post.quote_author}</cite>
                                                <i className="flaticon-right-quote" />
                                            </blockquote>

                                            <p>{post.body_2}</p>

                                            <figure className="wp-container-5 wp-block-gallery-2 wp-block-gallery has-nested-images columns-3 is-cropped alignwide">
                                                <figure className="wp-block-image size-large"><Image src={IMAGES.blogblock3} alt="" /></figure>
                                                <figure className="wp-block-image size-large"><Image src={IMAGES.blogblock4} alt="" /></figure>
                                                <figure className="wp-block-image size-large"><Image src={IMAGES.blogblock5} alt="" /></figure>
                                                <figure className="wp-block-image size-large"><Image src={IMAGES.blogblock1} alt="" /></figure>
                                                <figure className="wp-block-image size-large"><Image src={IMAGES.blogblock1} alt="" /></figure>
                                            </figure>

                                            <h3 className="dz-title">{post.section_heading}</h3>

                                            <p>{post.body_3}</p>
                                            <p>{post.body_4}</p>

                                        </div>

                                        <div className="dz-share-post meta-bottom bg-white">
                                            <div className="post-tags">
                                                <strong>Tags:</strong>
                                                {post.tags.map((tag, i) => (
                                                    <Link key={i} href={"#"} scroll={false}>{tag}</Link>
                                                ))}
                                            </div>
                                            <div className="dz-social-icon primary-light">
                                                <ul>
                                                    <li><Link href="https://www.linkedin.com/showcase/dexignzone/" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                                    <li><Link href="https://www.instagram.com/dexignzone/" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                    <li><Link href="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="clear" id="comment-list">
                                    <div className="post-comments comments-area style-1 clearfix">
                                        <h4 className="comments-title mb-2">Comments ({post.comments_list.length})</h4>
                                        <p className="dz-title-text">Join the conversation — share your experience or ask our team a question.</p>
                                        <div id="comment">
                                            <ol className="comment-list">
                                                {post.comments_list.map((c, i) => (
                                                    <li
                                                        key={i}
                                                        className={`comment even ${c.isReply ? "bypostauthor odd alt depth-2" : "thread-even depth-1"} comment`}
                                                        id={`comment-${i + 2}`}
                                                    >
                                                        <div className="comment-body">
                                                            <div className="comment-author vcard">
                                                                <Image src={avatars[i % 2]} alt={c.author} className="avatar" />
                                                                <cite className="fn">{c.author}</cite>
                                                            </div>
                                                            <div className="comment-content dz-page-text">
                                                                <p>{c.text}</p>
                                                            </div>
                                                            <div className="reply">
                                                                <Link className="comment-reply-link" href={"#"}>Reply</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div className="default-form comment-respond style-1" id="respond">
                                            <h4 className="comment-reply-title mb-2" id="reply-title">Leave a Comment</h4>
                                            <p className="dz-title-text">Have a question or experience to share? We'd love to hear from you.</p>
                                            <div className="clearfix">
                                                <form ref={form} onSubmit={handleSubmit} method="post" id="comments_form" className="comment-form" noValidate>
                                                    <p className="comment-form-author">
                                                        <input id="name" placeholder="Your Name" name="author" type="text" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <input id="email" required placeholder="Your Email" name="email" type="email" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <textarea id="comments" placeholder="Write your comment here..." className="form-control4" name="comment" cols={45} rows={3} required />
                                                    </p>
                                                    <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                        <button id="submit" type="submit" className="submit btn btn-primary btn-lg filled">Submit Now</button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
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

export default BlogDetails;