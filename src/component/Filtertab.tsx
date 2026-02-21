"use client"
import { useState } from "react";
import Link from "next/link";
import { filterdata1, filterdata2 } from "../constant/alldata";
import Image from "next/image";


interface FilterItem {
  id: number;
  title: string;
}

// interface CategoryItem {
//   id: number;
//   title: string;
//   kind: string;
//   image: string;
// }


// interface Props {
//   filterdata1: FilterItem[];
//   filterdata2: CategoryItem[];
// }

function Filtertab() {
    const [active, setActive] = useState(1);
    const handleclick = (id: number) => {
        setActive(id)
    }
    const [category, setCategory] = useState(filterdata2);
    const handleBtns = (type : FilterItem) => {
        if (type.title.includes('Skin & Face')) {
            setCategory(filterdata2)
        }
        else {
            setCategory(
                filterdata2.filter((el) => el.kind.includes(type.title))
            )
        }
    }
    return (
        <>
            <div className="site-filters clearfix style-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <ul className="filters justify-content-center" data-bs-toggle="buttons">
                    {filterdata1.map((data) => (
                        <li className={`${active === data.id ? 'active' : ''}`}                             
                            onClick={() => {
                                handleBtns(data);
                                handleclick(data.id);
                            }}
                            key={data.id}
                        >
                            <Link 
                                href={"#"} 
                                className='btn' 
                                scroll={false}
                                
                            >
                                {data.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="clearfix">
                <ul id="masonry" className="row">
                    {category.map((data, i) => (
                        <li key={data.id} className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <Image src={data.image} alt="media" />
                                    <div className="shop-meta">
                                        <Link href={"#"}  scroll={false} className="btn quick-view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye d-md-none d-block" />
                                            <span className="d-md-block d-none">Quick View</span>
                                        </Link>
                                        <div className="btn meta-icon dz-wishicon">
                                            <i className="icon feather icon-heart dz-heart" />
                                            <i className="icon feather icon-heart-on dz-heart-fill" />
                                        </div>
                                        <div className="btn meta-icon dz-carticon">
                                            <i className="feather icon-shopping-cart" />
                                        </div>
                                    </div>
                                    {i === 0 && (
                                        <div className="product-tag">
                                            <span className="badge">Get 20% Off</span>
                                        </div>
                                    )}

                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"> <Link href="/shop-details">{data.title}</Link> </h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <Link href="/shop-details" className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn"> 
                                        <i className="feather icon-arrow-up-right" /> 
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Filtertab;