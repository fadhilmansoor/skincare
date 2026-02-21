
import { IMAGES } from '@/constant/theme';
import MainHeader from '@/layout/MainHeader'
import Link from 'next/link';
import HeroBanner from './_components/HeroBanner';
import SkinCard1 from '@/component/SkinCard1';
import { marqueelist1, marqueelist2 } from '@/constant/alldata';
import FlexSwiper from '@/component/FlexSwiper';
import AfterTreatment from '@/component/AfterTreatment';
import Filtertab from '@/component/Filtertab'
import Frequently from '@/component/Frequently';
import Teams from '@/component/Teams';
import ChoosePlan from '@/component/ChoosePlan';
import BestDentist from '@/component/BestDentist';
import WhyChoose from '@/component/WhyChoose';
import Image from 'next/image';
import TestimoniulSwipers from '@/component/TestimoniulSwiper';
import VerticalSwiper from '@/component/VerticalSwiper';
import BookAppointment from '@/component/BookAppointment';
import ClientLogo from '@/component/ClientLogo';
import Footer from '@/layout/Footer';

const HomePage = () => {
    return(
        <div className="page-wraper">
            <MainHeader transparent='header-transparent' />
            <main className="page-content">
				<HeroBanner />
                <section className="content-inner bg-light">
					<div className="container">
						<div className="row content-wrapper style-13">
							<SkinCard1 />
						</div>
					</div>
				</section>
<div className="dz-marquee style-1 bg-secondary overflow-hidden">
  <ul className="marquee-list marquee-one-line">
    {marqueelist1.map((data, i) => (
      <li
        key={i}
        className="item wow bounceIn"
        data-wow-delay={data.delay}
        data-wow-duration="0.8s"
      >
        <Link
          href={data.link || "#"}
          target={data.target ?? "_self"}
          rel={data.target === "_blank" ? "noopener noreferrer" : undefined}
          className="marquee-link"
        >
          {data.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
                <section className="content-inner-2 bg-light">
					<div className="container">
						<div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title"> Transform Your Skin with Our <br /> Advanced Dermatology Treatments </h2>
							<p className="mw-100"> Experience a transformative journey that sculpts your physique and unlocks your full potential. </p>
						</div>
						<FlexSwiper />
						<div className="dz-separator style-3">
							<Link href="/services" className="btn separator-badge fw-medium">View All Services</Link>
						</div>
					</div>
				</section>
                <section className="content-inner bg-light bg-bottom-half-white">
					<div className="container">
						<div className="section-head style-3 text-center m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title m-b0"> After Treatment </h2>
						</div>
						<AfterTreatment />
					</div>
				</section>
                <section className="content-inner">
					<div className="container">
						<div className="row content-wrapper style-5 align-items-center">
							<Frequently />
						</div>
					</div>
				</section>
                <section className="content-inner bg-light gradient-bottom-light">
					<div className="container">
						<div className="section-head style-3 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title m-b10"> We Employ only Specialists </h2>
							<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
						</div>
						<div className="row">
							<Teams />
						</div>
					</div>
				</section>
                {/* <section className="content-inner bg-light">
					<div className="container">
						<div className="row align-items-center pricingtable-content-wrapper">
							<ChoosePlan />
						</div>
					</div>
				</section> */}
                <div className="dz-marquee style-2 bg-light">
					<ul className="marquee-list">
						{marqueelist2.map((data, i) => (
							<li key={i} className={`item wow bounceIn ${data.columnstand}`} data-wow-delay={data.delay} data-wow-duration="0.8s"> {data.title} </li>
						))}
					</ul>
				</div>
                <section className="content-inner-3 bg-light pb-0 overflow-hidden">
					<div className="container">
						<div className="row content-wrapper style-17 align-items-end justify-content-center">
							<BestDentist     />
						</div>
					</div>
				</section>
                <section className="content-inner">
					<div className="container">
						<div className="row content-wrapper style-14 align-items-center">
							<WhyChoose />
						</div>
					</div>
				</section>
                <Image src={IMAGES.gallery} alt="" className="w-100" />
                <section className="content-inner pt-0">
					<div className="container">
						<div className="section-head style-1 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 className="title m-b10"> What our patient say </h2>
							<p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
						</div>
						<TestimoniulSwipers />
					</div>
				</section>

                <section className="content-wrapper style-18 bg-light">
					<BookAppointment />
				</section>
				{/* <div className="content-inner-4">
					<div className="container">
						<ClientLogo />
					</div>
				</div> */}
            </main>
            <Footer />
            
        </div>
    )
}
export default HomePage;