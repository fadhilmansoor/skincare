import Link from  'next/link'
import { IMAGES } from "./theme"
// index marquee 1
// index marquee 1
export const marqueelist1 = [
  // Dental Services
  {
    title: "General Dentistry",
    delay: "0.1s",
    link: "/services#general-dentistry",
    target: "_self",
  },
  {
    title: "Cosmetic Dentistry",
    delay: "0.2s",
    link: "/services#cosmetic-dentistry",
    target: "_self",
  },
  {
    title: "Teeth Whitening",
    delay: "0.3s",
    link: "/services#teeth-whitening",
    target: "_self",
  },
  {
    title: "Teeth Cleaning (Scaling & Polishing)",
    delay: "0.4s",
    link: "/services#teeth-cleaning-scaling-polishing",
    target: "_self",
  },
  {
    title: "Dental Implants",
    delay: "0.5s",
    link: "/services#dental-implants",
    target: "_self",
  },
  {
    title: "Veneers",
    delay: "0.6s",
    link: "/services#veneers",
    target: "_self",
  },
  {
    title: "Orthodontics (Braces & Aligners)",
    delay: "0.7s",
    link: "/services#orthodontics-braces-aligners",
    target: "_self",
  },
  {
    title: "Smile Makeover",
    delay: "0.8s",
    link: "/services#smile-makeover",
    target: "_self",
  },

  // Dermatology & Aesthetic Services
  {
    title: "General Dermatology",
    delay: "0.9s",
    link: "/services#general-dermatology",
    target: "_self",
  },
  {
    title: "Skin Rejuvenation",
    delay: "1.0s",
    link: "/services#skin-rejuvenation",
    target: "_self",
  },
  {
    title: "Laser Treatments",
    delay: "1.1s",
    link: "/services#laser-treatments",
    target: "_self",
  },
  {
    title: "Laser Hair Removal",
    delay: "1.2s",
    link: "/services#laser-hair-removal",
    target: "_self",
  },
  {
    title: "Anti-Aging Treatments",
    delay: "1.3s",
    link: "/services#anti-aging-treatments",
    target: "_self",
  },
  {
    title: "Facial Treatments",
    delay: "1.4s",
    link: "/services#facial-treatments",
    target: "_self",
  },

  // Cosmetic & Non-Surgical Aesthetics
  {
    title: "Botox",
    delay: "1.5s",
    link: "/services#botox",
    target: "_self",
  },
  {
    title: "Dermal Fillers",
    delay: "1.6s",
    link: "/services#dermal-fillers",
    target: "_self",
  },
  {
    title: "Facial Contouring",
    delay: "1.7s",
    link: "/services#facial-contouring",
    target: "_self",
  },
  {
    title: "Skin Tightening",
    delay: "1.8s",
    link: "/services#skin-tightening",
    target: "_self",
  },

  // Hair Restoration
  {
    title: "Hair Transplant (FUE / DHI)",
    delay: "1.9s",
    link: "/services#hair-transplant-fue-dhi",
    target: "_self",
  },
  {
    title: "Beard Transplant",
    delay: "2.0s",
    link: "/services#beard-transplant",
    target: "_self",
  },
  {
    title: "Eyebrow Transplant",
    delay: "2.1s",
    link: "/services#eyebrow-transplant",
    target: "_self",
  },
  {
    title: "Hair Loss Treatments",
    delay: "2.2s",
    link: "/services#hair-loss-treatments",
    target: "_self",
  },
];
export const marqueelist2 = [
    { title: 'Bodycare', delay: '0.1s', columnstand: 'text-outline', },
    { title: 'Accessories', delay: '0.2s', columnstand: 'text-outline', },
    { title: 'Skincare', delay: '0.3s', columnstand: 'text-primary', },
    { title: 'Haircare', delay: '0.4s', columnstand: 'text-outline', },
    { title: 'Bodycare', delay: '0.5s', columnstand: 'text-outline', },
    { title: 'Accessories', delay: '0.6s', columnstand: 'text-outline', },
    { title: 'Skincare', delay: '0.7s', columnstand: 'text-primary', },
    { title: 'Haircare', delay: '0.8s', columnstand: 'text-outline', },
]
//  teamdata component 
export const teamdata = [
    { id: 1, image: IMAGES.team1, dealy: '0.2s', title: 'Nashid Martines', },
    { id: 2, image: IMAGES.team2, dealy: '0.4s', title: 'Kenneth Fong', },
    { id: 3, image: IMAGES.team3, dealy: '0.6s', title: 'Diarmuid Fong', },
    { id: 4, image: IMAGES.team4, dealy: '0.8s', title: 'Giovanni', },
]
//testimoniul component
export const testmoniuldata = [
    { image: IMAGES.testilarge1, title: 'Kenneth Fong', },
    { image: IMAGES.testilarge2, title: 'KeNashid Martines', },
    { image: IMAGES.testilarge3, title: 'Giovanni', },
]
// clientlogo component 
export const clientdata = [
    { image: IMAGES.smalllogo1, },
    { image: IMAGES.smalllogo2, },
    { image: IMAGES.smalllogo3, },
    { image: IMAGES.smalllogo4, },
    { image: IMAGES.smalllogo5, },
    { image: IMAGES.smalllogo6, },
    { image: IMAGES.smalllogo1, },
    { image: IMAGES.smalllogo2, },
    { image: IMAGES.smalllogo3, },
    { image: IMAGES.smalllogo4, },
    { image: IMAGES.smalllogo5, },
    { image: IMAGES.smalllogo6, },
]
// clientdata2 
export const clientdata2 = [
    { image: IMAGES.middlelogo1, delay: '0.1s', },
    { image: IMAGES.middlelogo2, delay: '0.2s', },
    { image: IMAGES.middlelogo3, delay: '0.3s', },
    { image: IMAGES.middlelogo4, delay: '0.4s', },
    { image: IMAGES.middlelogo1, delay: '0.5s', },
    { image: IMAGES.middlelogo2, delay: '0.6s', },
    { image: IMAGES.middlelogo3, delay: '0.7s', },
    { image: IMAGES.middlelogo4, delay: '0.8s', },
]
// compareswiper 
export const compareswiperdata = [
    { image: IMAGES.compare1, delay: '0.1s', },
    { image: IMAGES.compare2, delay: '0.2s', },
    { image: IMAGES.compare3, delay: '0.3s', },
    { image: IMAGES.compare1, delay: '0.1s', },
    { image: IMAGES.compare4, delay: '0.4s', },
    { image: IMAGES.compare5, delay: '0.5s', },
]
// accordian data 

interface AcordioProp{
    title : string,
    key : string
}

export const accordiandata : AcordioProp[] = [
    { title: 'How much do you charge for pedicure ?', key: '0', },
    { title: 'What types of treatments do you offer?', key: '1', },
    { title: ' How do i book my appointment ?', key: '2', },
    { title: 'Can i cancel my appointment ?', key: '3', },
]
// flexswiper component 
export const flexswiperdata = [
  {
    id: 1,
    image: IMAGES.servicemiddle1,
    title: "Dental Services",
    desc: "Comprehensive dental care including general dentistry, cosmetic treatments, teeth whitening, implants, veneers, orthodontics, and smile makeovers.",
  },
  {
    id: 2,
    image: IMAGES.servicemiddle2,
    title: "Dermatology & Aesthetic Services",
    desc: "Advanced skin and aesthetic solutions for healthy, radiant skin, including dermatology care, laser treatments, skin rejuvenation, and facial therapies.",
  },
  {
    id: 3,
    image: IMAGES.servicemiddle3,
    title: "Cosmetic & Non-Surgical Aesthetics",
    desc: "Enhance your natural beauty with non-surgical treatments such as Botox, dermal fillers, facial contouring, and skin tightening procedures.",
  },
  {
    id: 4,
    image: IMAGES.servicemiddle4,
    title: "Hair Restoration",
    desc: "Personalized hair restoration solutions including FUE/DHI hair transplants, beard and eyebrow transplants, and effective hair loss treatments.",
  },
];
//  shop 
// export const shopdata = [
//     { image: IMAGES.shop1, dealy: '0.2s', title: 'Night beauty', },
//     { image: IMAGES.shop2, dealy: '0.4s', title: 'Body Serum', },
//     { image: IMAGES.shop3, dealy: '0.6s', title: 'Body Polish', },
//     { image: IMAGES.shop4, dealy: '0.8s', title: 'Body Serum', },
//     { image: IMAGES.shop2, dealy: '1.0s', title: 'Body Wash', },
//     { image: IMAGES.shop1, dealy: '1.2s', title: 'Body Oil', },
//     { image: IMAGES.shop3, dealy: '1.4s', title: 'Body Cream', },
//     { image: IMAGES.shop4, dealy: '1.6s', title: 'Body Serum', },
//     { image: IMAGES.shop3, dealy: '1.8s', title: 'Repairing Body Gel', },
//     { image: IMAGES.shop1, dealy: '2.0s', title: 'Body Wash', },
//     { image: IMAGES.shop4, dealy: '2.2s', title: 'Body Scrub', },
//     { image: IMAGES.shop2, dealy: '2.4s', title: 'Body Mist', },
// ]
// blog 

export interface BlogItem {
  image: string;
  delay: string;
  title: string;
}

export const blogdata : BlogItem[]= [
    { image: IMAGES.blogmiddle1, delay: '0.2s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.blogmiddle2, delay: '0.4s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.blogmiddle3, delay: '0.6s', title: 'Brilliant skin blog your dermatology care resource', },
    { image: IMAGES.blogmiddle1, delay: '0.8s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.blogmiddle2, delay: '1.0s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.blogmiddle3, delay: '1.2s', title: 'Brilliant skin blog your dermatology care resource', },
]
// sidebar 
export const sidebarpostdata = [
    { date:"10 June 2025", image: IMAGES.blogsmall1, title:"The Art of Managing Business and Patient Care"},
    { date:"13 June 2025", image: IMAGES.blogsmall2, title:"The New Face of Care Blending Empathy with Expertise"},
    { date:"17 June 2025", image: IMAGES.blogsmall3, title:"Here Care Expertise Elevating the Patient Experience"},
]
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
// vertical swiepr 
export const verticaldata1 = [
    { image: IMAGES.bloglarge1, },
    { image: IMAGES.bloglarge2, },
    { image: IMAGES.bloglarge3, },
    { image: IMAGES.bloglarge1, },
    { image: IMAGES.bloglarge2, },
]
export const verticaldata2 = [
    { image: IMAGES.blogmiddle1, title:"Radiant reflections expert dermatology and skin."},
    { image: IMAGES.blogmiddle2, title:"Glow guide your path to perfect skin health"},
    { image: IMAGES.blogmiddle3, title:"Brilliant skin blog your dermatology care resource"},
    { image: IMAGES.blogmiddle1, title:"Radiant reflections expert dermatology and skin."},
    { image: IMAGES.blogmiddle2, title:"Glow guide your path to perfect skin health"},
]
// footer 
export const footermenu = [
    {
        title: 'Our Services', span1: 'Emergency Care', span2: 'Operation Theater', span3: 'Medical Checkup', span4: 'Diagnostic Center', span5: 'Outdoor Checkup',
        link1: '/service-detail', link2: '/service-detail', link3: '/service-detail', link4: '/service-detail', link5: '/service-detail',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'Latest News', span5: 'Our Sitemap',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/blog-grid', link5: '#',
    },
    {
        title: 'Our Stores', span1: 'New York', span2: 'London SF', span3: 'Edinburgh', span4: 'Los Angeles', span5: 'Las Vegas',
        link1: '#', link2: '#', link3: '#', link4: '#', link5: '#',
    },
 {
  title: 'Social Media',
  span1: 'Facebook',
  span2: 'Instagram',
  span3: 'LinkedIn',
  span4: 'TikTok',
  span5: 'WhatsApp',

  link1: 'https://facebook.com/yourpage',
  link2: 'https://instagram.com/yourpage',
  link3: 'https://linkedin.com/company/yourcompany',
  link4: 'https://tiktok.com/@yourusername',
  link5: 'https://wa.me/971586050060',
},
]
export const footermenu2 = [
    { title: 'Call Us', icon: <i className="feather icon-phone" />, paragraph: '+1 123 456 7890', },
    { title: 'Send us a Mail', icon: <i className="feather icon-mail" />, paragraph: 'info@example.com', },
    { title: 'Opening Time', icon: <i className="feather icon-clock" />, paragraph: 'Mon -Sat: 7:00 - 17:00', },
]
//  appoinetment 
export const appointmentmapdata = [
    { title: 'United State', image1: IMAGES.unitedstate, image2: IMAGES.map1, dealy: '0.2s', },
    { title: 'Canada', image1: IMAGES.cananda, image2: IMAGES.map2, dealy: '0.4s', },
    { title: 'India', image1: IMAGES.india, image2: IMAGES.map1, dealy: '0.6s', },
    { title: 'Russia', image1: IMAGES.russia, image2: IMAGES.map2, dealy: '0.8s', },
]
// testimonial 
export const testimonialdata2 = [
    {id: 1, name:"Xanthos", delay: '0.2s', post : 'Software Engineer' },
    {id: 2, name:"Kenneth Fong", delay: '0.4s',  post : 'Postgraduate Student'},
    {id: 3, name:"Diarmuid", delay: '0.6s', post : 'Web Developer' },
    {id: 4, name:"Giovanni", delay: '0.8s',  post : 'Data Scientist'},
]
export const testimonialdata3 = [
    { post:"Postgraduate Student",image: IMAGES.testilarge2, title:"Kenneth Fong", image2: IMAGES.testismall1, delay: '0.2s', },
    { post:"Research Student",image: IMAGES.testilarge3, title:"Diarmuid Kent", image2: IMAGES.testismall2, delay: '0.4s', },
    { post:"Master's Student",image: IMAGES.testilarge4, title:"Giovanni Thoms", image2: IMAGES.testismall3, delay: '0.6s', },
]
// filtertab 
export const filterdata1 = [
    { id: 1, title: "Skin & Face", },
    { id: 2, title: "Massage Oils", },
    { id: 3, title: "Cosmetics", },
    { id: 4, title: "Daily Offers", },
]
export const filterdata2 = [
    { id: 1, image: IMAGES.shop1, title: 'Night beauty', kind: 'Skin & Face,' },
    { id: 2, image: IMAGES.shop2, title: 'Herbal beauty', kind: 'Massage Oils Skin & Face', },
    { id: 3, image: IMAGES.shop3, title: 'Sun beauty', kind: 'Cosmetics Massage Oils', },
    { id: 4, image: IMAGES.shop4, title: 'Green beauty', kind: 'Daily Offers Cosmetics', },
]

export interface MenuItemContent {
  title: string;
  to: string;
  image?: string;
}

export interface MenuItem {
  id?: string | number;
  title: string;
  to?: string;
  image?: string;
  classChange?: string;
  content?: { id?: string | number; title: string; to: string; image?: any }[];
}

// hedaer menu 
export const menudata : MenuItem[] = [
{
  title: "Home",
  to: "/",
},
{
  title: "About Us",
  to: "/about-us",
},
    // {
    //     title: "Pages",
    //     content: [
    //         { title: "About Us", to: "/about-us" },
    //         { title: "About Us 2", to: "/about-us-2" },
    //         { title: "Appointment", to: "/appointment" },
    //         { title: "Pricing Table", to: "/pricing-table" },
    //         { title: "Testimonial", to: "/testimonial" },
    //         { title: "Faqs", to: "/faqs" },
    //         { title: "Error 404", to: "/error-404" },
    //     ],
    // },
    {
        title: "Team",
        content: [
            { title: "Team", to: "/team" },
            { title: "Team Detail", to: "/team-detail" },
        ],
    },
    {
        title: "Services",
        content: [
            { title: "Services", to: "/services" },
            { title: "Service Detail 2", to: "/service-detail-2" },
        ],
    },
    {
        title: "Blogs",
        content: [
            { title: "Blog Grid", to: "/blog-grid" },
            { title: "Blog List Sidebar", to: "/blog-list-sidebar" },
            { title: "Blog Details", to: "/blog-details" },
        ],
    },
    {
        title: "Contact Us",
        classChange: "sub-menu-down",
        content: [
            { title: "Contact Us", to: "/contact-us" },
            { title: "Contact Us 2", to: "/contact-us-2" },
        ],
    },
]
export const shopsidebarcartdata = [
    { quantity: 1, price: 50 ,image: IMAGES.shop1, title: 'Herbal beauty', },
    { quantity: 1, price: 60 ,image: IMAGES.shop2, title: 'Green beauty', },
    { quantity: 1, price: 40 ,image: IMAGES.shop4, title: 'Sun beauty', },
]
export const pricinglistdata = [
    { title: ' Skin Cancer Screenings', },
    { title: 'Acne Treatment', },
    { title: 'Skin Rejuvenation', },
    { title: 'Eczema and Psoriasis ', columnstand: 'active', },
    { title: 'Hair and Nail Disorders', },
    { title: 'Mohs Surgery', },
    { title: 'Cosmetic Dermatology', },
    { title: 'Scar Revision', },
    { title: 'Wart Removal', },
    { title: 'Photodynamic Therapy', },
    { title: 'Rosacea Treatment', },
]
// contactus 
export const contactusdata = [
    {
        id: 1,
        title: "Address",
        icon: <i className="feather icon-map-pin" />,
        delay: "0.2s",
        para: <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>,
    },
    {
        id: 2,
        title: "Call Us",
        icon: <i className="feather icon-phone" />,
        delay: "0.4s",
        para: <p>
            <Link href="tel:+01234567890" className="text-body">+0 123-456-7890</Link><br />
            <Link href="tel:+09876543210" className="text-body">+0 987-654-3210</Link>
        </p>,
    },
    {
        id: 3,
        title: "Send us a Mail",
        icon: <i className="feather icon-mail" />,
        delay: "0.6s",
        para: <p>
            <Link href="mailto:info@example.com" className="text-body">info@example.com</Link><br />
            <Link href="mailto:medical@example.com" className="text-body">medical@example.com</Link>
        </p>,
    },
    {
        id: 4,
        title: "Opening Time",
        icon: <i className="feather icon-clock" />,
        delay: "0.8s",
        para: <p>Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>,
    },
]
