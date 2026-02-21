import Link from "next/link";
import { IMAGES, SVGICON } from "../constant/theme";
import Image from "next/image";

interface props {
    title : string
}

function PageBanner({ title } : props) {
    return (
        <>
            <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md" style={{ backgroundImage: `url(${IMAGES.bnr1.src})` }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry d-table-cell">
                        <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item">{title}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="vertical-info left">
                    <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <li><Link href="https://www.instagram.com/dexignzone" target="_blank">Instagram</Link></li>
                        <li><Link href="https://www.facebook.com/dexignzone" target="_blank">Facebook</Link></li>
                        <li><Link href="https://twitter.com/dexignzone" target="_blank">twitter</Link></li>
                    </ul>
                </div>
                <div className="blur1"></div>
                <div className="blur2"></div>
                <div className="elip"><Image src={IMAGES.herobanner2} alt="hero" /></div>
                <div className="item1">
                    <span dangerouslySetInnerHTML={{__html : SVGICON.star1}} />
                </div>
                <div className="item2">                    
                    <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{__html : SVGICON.star2}}
                    >
                    </svg>
                </div>
                <div className="item3">
                    <span dangerouslySetInnerHTML={{__html : SVGICON.star3}} />
                </div>
            </div>
        </>
    )
}
export default PageBanner;