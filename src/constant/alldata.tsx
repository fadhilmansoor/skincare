import Link from  'next/link'
import { IMAGES } from "./theme"

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

// export const marqueelist2 = [
//     { title: 'Dental Care', delay: '0.1s', columnstand: 'text-outline', },
//     { title: 'Dermatology', delay: '0.2s', columnstand: 'text-outline', },
//     { title: 'Skin Care', delay: '0.3s', columnstand: 'text-primary', },
//     { title: 'Hair Restoration', delay: '0.4s', columnstand: 'text-outline', },
//     { title: 'Dental Care', delay: '0.5s', columnstand: 'text-outline', },
//     { title: 'Dermatology', delay: '0.6s', columnstand: 'text-outline', },
//     { title: 'Skin Care', delay: '0.7s', columnstand: 'text-primary', },
//     { title: 'Hair Restoration', delay: '0.8s', columnstand: 'text-outline', },
// ]

// teamdata component 
export const teamdata = [
    { id: 1, image: IMAGES.team1, dealy: '0.2s', title: 'Dr. Fadi Othmanly', },
    { id: 2, image: IMAGES.team2, dealy: '0.4s', title: 'Dr. Sarah Al Mansoori', },
    { id: 3, image: IMAGES.team3, dealy: '0.6s', title: 'Dr. Khalid Hamdan', },
    { id: 4, image: IMAGES.team4, dealy: '0.8s', title: 'Dr. Layla Nasser', },
]

// testimonial component
export const testmoniuldata = [
    { image: IMAGES.testilarge1, title: 'Sarah W.', },
    { image: IMAGES.testilarge2, title: 'Michael R.', },
    { image: IMAGES.testilarge3, title: 'Emily L.', },
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

// clientdata2 (Fadi Othmanly Group brands)
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

// accordion data
interface AcordioProp{
    title : string,
    key : string
}

export const accordiandata : AcordioProp[] = [
    { title: 'What dental services do you offer at Signature Plus Clinic?', key: '0', },
    { title: 'Where is Signature Plus Clinic located in Dubai?', key: '1', },
    { title: 'How do I book an appointment?', key: '2', },
    { title: 'Do you offer teeth whitening and veneers?', key: '3', },
]

// flexswiper component 
export const flexswiperdata = [
  {
    id: 1,
    image: IMAGES.servicemiddle1,
    title: "Dental Services",
    desc: "Comprehensive dental care including general dentistry, cosmetic treatments, teeth whitening, implants, veneers, orthodontics, and smile makeovers — all delivered in our state-of-the-art in-house dental lab.",
  },
  {
    id: 2,
    image: IMAGES.servicemiddle2,
    title: "Dermatology & Skin Care",
    desc: "Advanced solutions for healthier, radiant skin. Addressing a wide range of concerns including acne, pigmentation, eczema, skin rejuvenation, laser treatments, and facial therapies tailored to your skin type.",
  },
  {
    id: 3,
    image: IMAGES.servicemiddle3,
    title: "Cosmetic & Non-Surgical Aesthetics",
    desc: "Enhance your natural beauty with non-surgical treatments such as Botox, dermal fillers, facial contouring, and skin tightening procedures for youthful, natural-looking results.",
  },
  {
    id: 4,
    image: IMAGES.servicemiddle4,
    title: "Hair Restoration",
    desc: "Personalized hair restoration solutions including FUE/DHI hair transplants, beard and eyebrow transplants, and effective hair loss treatments to restore confidence and natural growth.",
  },
];

// blog
export interface BlogItem {
  image: string;
  delay: string;
  title: string;
}

export const blogdata : BlogItem[]= [
    { image: IMAGES.blogmiddle1, delay: '0.2s', title: 'The Secret to a Confident Smile: Expert Dental Care in Dubai', },
    { image: IMAGES.blogmiddle2, delay: '0.4s', title: 'Radiant Skin: Your Complete Guide to Dermatology at Signature Plus', },
    { image: IMAGES.blogmiddle3, delay: '0.6s', title: 'Hair Transplant in Dubai: FUE vs DHI — Whats Right for You?', },
    { image: IMAGES.blogmiddle1, delay: '0.8s', title: 'Why Veneers Are the Most Popular Cosmetic Dental Treatment in the UAE', },
    { image: IMAGES.blogmiddle2, delay: '1.0s', title: 'Botox & Fillers: Separating Facts from Fiction', },
    { image: IMAGES.blogmiddle3, delay: '1.2s', title: 'How to Maintain Your Smile After Teeth Whitening', },
]

// sidebar
export const sidebarpostdata = [
    { date: "10 Jan 2025", image: IMAGES.blogsmall1, title: "The Art of Combining Dental & Aesthetic Care Under One Roof" },
    { date: "18 Feb 2025", image: IMAGES.blogsmall2, title: "Meet Dr. Fadi: The Visionary Behind Signature Plus Clinic" },
    { date: "05 Mar 2025", image: IMAGES.blogsmall3, title: "Smile Design: How We Craft Your Perfect Smile at Signature Plus" },
]

export const tagdata = [
    { title: 'Dental Care', num: '(12)', },
    { title: 'Veneers', num: '(8)', },
    { title: 'Skin Care', num: '(15)', },
    { title: 'Hair Transplant', num: '(10)', },
    { title: 'Botox', num: '(7)', },
    { title: 'Dermatology', num: '(14)', },
    { title: 'Smile Design', num: '(9)', },
    { title: 'Laser Treatment', num: '(6)', },
]

// vertical swiper 
export const verticaldata1 = [
    { image: IMAGES.bloglarge1, },
    { image: IMAGES.bloglarge2, },
    { image: IMAGES.bloglarge3, },
    { image: IMAGES.bloglarge1, },
    { image: IMAGES.bloglarge2, },
]

export const verticaldata2 = [
    { image: IMAGES.blogmiddle1, title: "The Secret to a Confident Smile: Expert Dental Care in Dubai" },
    { image: IMAGES.blogmiddle2, title: "Radiant Skin: Your Complete Guide to Dermatology at Signature Plus" },
    { image: IMAGES.blogmiddle3, title: "Hair Transplant in Dubai: FUE vs DHI — What's Right for You?" },
    { image: IMAGES.blogmiddle1, title: "Why Veneers Are the Most Popular Cosmetic Treatment in the UAE" },
    { image: IMAGES.blogmiddle2, title: "Botox & Fillers: Separating Facts from Fiction" },
]

// footer
export const footermenu = [
    {
        title: 'Our Services',
        span1: 'Dental Services', span2: 'Derma Services', span3: 'Cosmetic Surgery', span4: 'Hair Transplant', span5: 'Veneers',
        link1: '/services#dental-services',
        link2: '/services#derma-services',
        link3: '/services#cosmetic-surgery',
        link4: '/services#hair-transplant',
        link5: '/services#veneers',
    },
    {
        title: 'Useful Links',
        span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'Our Blog', span5: 'Our Offers',
        link1: '',
        link2: '',
        link3: '/contact-us-2',
        link4: '/blog-grid',
        link5: '',
    },
    {
        title: 'Our Clinics',
        span1: 'Signature Plus Dubai', span2: 'Signature Plus Fujairah', span3: 'Signature RAK', span4: 'Smile Design Clinic', span5: 'Esthetic Lab',
        link1: '#',
        link2: '#',
        link3: '#',
        link4: '#',
        link5: '#',
    },
    {
        title: 'Social Media',
        span1: 'Facebook', span2: 'Instagram', span3: 'TikTok', span4: 'Snapchat', span5: 'WhatsApp',
        link1: 'https://www.facebook.com/signatureplusclinic',
        link2: 'https://www.instagram.com/signatureplus_dubai',
        link3: 'https://www.tiktok.com/@signature_plus',
        link4: 'https://www.snapchat.com/add/signatureclinic',
        link5: 'https://wa.me/971586585190',
    },
]

export const footermenu2 = [
    { title: 'Call Us', icon: <i className="feather icon-phone" />, paragraph: '+971 433 33108', },
    { title: 'Send us a Mail', icon: <i className="feather icon-mail" />, paragraph: 'info@signatureplusclinic.com', },
    { title: 'Opening Hours', icon: <i className="feather icon-clock" />, paragraph: 'Open Daily: 11:00 AM – 10:00 PM', },
]

// appointment map data
export const appointmentmapdata = [
  {
    title: "Signature Plus Clinic Dubai",

    image1: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",

    map: "https://www.google.com/maps?q=25.244475,55.343662&hl=en&z=14&output=embed",

    address:
      "Flat 605 – Garhoud Views Building, Sheikh Rashid Rd, Al Garhoud, Dubai, United Arab Emirates",

    phone: "+971 433 33108",

    direction:
      "https://www.google.com/maps/place/Signature+Plus+Clinic/@25.244475,55.343662,17z",
  },

  {
    title: "Signature Plus Fujairah",

    image1: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",

    map: "https://www.google.com/maps?q=25.1167,56.3347&hl=en&z=14&output=embed",

    address:
      "5, 1 Street – G Floor, Naseem Al Bahar Villas, Al Faseel, Fujairah, UAE",

    phone: "+971 9 223 2525",

    direction:
      "https://www.google.com/maps/place/Signature+Plus+Clinic+Fujairah",
  },

  {
    title: "Signature Plus RAK Clinic",

    image1: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",

    map: "https://www.google.com/maps?q=25.7917,55.9432&hl=en&z=14&output=embed",

    address:
      "69 Corniche Al Qawasim St, Dafan Al Nakheel, Ras Al Khaimah, UAE",

    phone: "+971 7 226 6600",

    direction:
      "https://www.google.com/maps/place/69+Corniche+Al+Qawasim+St,+Ras+Al+Khaimah",
  },
];
// testimonial
export const testimonialdata2 = [
    { id: 1, name: "Sarah W.", delay: '0.2s', post: 'Teeth Whitening Patient' },
    { id: 2, name: "Michael R.", delay: '0.4s', post: 'Smile Makeover Patient' },
    { id: 3, name: "Emily L.", delay: '0.6s', post: 'Veneers Patient' },
    { id: 4, name: "David M.", delay: '0.8s', post: 'Dental Implants Patient' },
]

export const testimonialdata3 = [
    { post: "Smile Makeover Patient", image: IMAGES.testilarge2, title: "Michael R.", image2: IMAGES.testismall1, delay: '0.2s', },
    { post: "Veneers Patient", image: IMAGES.testilarge3, title: "Emily L.", image2: IMAGES.testismall2, delay: '0.4s', },
    { post: "Dental Implants Patient", image: IMAGES.testilarge4, title: "David M.", image2: IMAGES.testismall3, delay: '0.6s', },
]

// filtertab
export const filterdata1 = [
    { id: 1, title: "Dental", },
    { id: 2, title: "Dermatology", },
    { id: 3, title: "Cosmetic", },
    { id: 4, title: "Hair Restoration", },
]

export const filterdata2 = [
    { id: 1, image: IMAGES.shop1, title: 'Teeth Whitening', kind: 'Dental' },
    { id: 2, image: IMAGES.shop2, title: 'Skin Rejuvenation', kind: 'Dermatology Cosmetic', },
    { id: 3, image: IMAGES.shop3, title: 'Veneers', kind: 'Dental Cosmetic', },
    { id: 4, image: IMAGES.shop4, title: 'Hair Transplant FUE', kind: 'Hair Restoration', },
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

// header menu
export const menudata: MenuItem[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Dental",
    content: [
      { title: "General Dentistry", to: "/services/general-dentistry" },
      { title: "Cosmetic Dentistry", to: "/services/cosmetic-dentistry" },
      { title: "Teeth Whitening", to: "/services/teeth-whitening" },
      { title: "Teeth Cleaning (Scaling & Polishing)", to: "/services/teeth-cleaning-scaling-polishing" },
      { title: "Dental Implants", to: "/services/dental-implants" },
      { title: "Veneers", to: "/services/veneers" },
      { title: "Orthodontics (Braces & Aligners)", to: "/services/orthodontics-braces-aligners" },
      { title: "Smile Makeover", to: "/services/smile-makeover" },
    ],
  },
  {
    title: "Derma",
    content: [
      { title: "General Dermatology", to: "/services/general-dermatology" },
      { title: "Skin Rejuvenation", to: "/services/skin-rejuvenation" },
      { title: "Laser Treatments", to: "/services/laser-treatments" },
      { title: "Laser Hair Removal", to: "/services/laser-hair-removal" },
      { title: "Anti-Aging Treatments", to: "/services/anti-aging-treatments" },
      { title: "Facial Treatments", to: "/services/facial-treatments" },
    ],
  },
  {
    title: "Non-Surgical",
    content: [
      { title: "Botox", to: "/services/botox" },
      { title: "Dermal Fillers", to: "/services/dermal-fillers" },
      { title: "Facial Contouring", to: "/services/facial-contouring" },
      { title: "Skin Tightening", to: "/services/skin-tightening" },
    ],
  },
  {
    title: "Hair Restoration",
    content: [
      { title: "Hair Transplant (FUE / DHI)", to: "/services/hair-transplant" },
      { title: "Beard Transplant", to: "/services/beard-transplant" },
      { title: "Eyebrow Transplant", to: "/services/eyebrow-transplant" },
      { title: "Hair Loss Treatments", to: "/services/hair-loss-treatments" },
    ],
  },
  {
    title: "Our Doctors",
    to: "/team",
  },
  // {
  //   title: "Blogs",
  //   content: [
  //     { title: "Blog Grid", to: "/blog-grid" },
  //     { title: "Blog List Sidebar", to: "/blog-list-sidebar" },
  //     { title: "Blog Details", to: "/blog-details" },
  //   ],
  // },
  // {
  //   title: "Contact Us",
  //   content: [
  //     { title: "Contact Us", to: "/contact-us" },
  //     { title: "Make Appointment", to: "https://signatureplusclinic.com/appointment/" },
  //   ],
  // },
];

export const shopsidebarcartdata = [
    { quantity: 1, price: 50, image: IMAGES.shop1, title: 'Teeth Whitening Kit', },
    { quantity: 1, price: 60, image: IMAGES.shop2, title: 'Skin Rejuvenation Pack', },
    { quantity: 1, price: 40, image: IMAGES.shop4, title: 'Hair Care Treatment', },
]

export const pricinglistdata = [
    { title: 'Teeth Whitening', },
    { title: 'Teeth Cleaning (Scaling & Polishing)', },
    { title: 'Dental Implants', },
    { title: 'Veneers', columnstand: 'active', },
    { title: 'Orthodontics (Braces & Aligners)', },
    { title: 'Smile Makeover', },
    { title: 'Skin Rejuvenation', },
    { title: 'Laser Treatments', },
    { title: 'Botox & Dermal Fillers', },
    { title: 'Hair Transplant (FUE / DHI)', },
    { title: 'Anti-Aging Treatments', },
]

// contact us
export const contactusdata = [
    {
        id: 1,
        title: "Address",
        icon: <i className="feather icon-map-pin" />,
        delay: "0.2s",
        para: <p>Flat 605 – Sheikh Rashid Rd, Al Garhoud, Garhoud Views Building, Dubai, UAE</p>,
    },
    {
        id: 2,
        title: "Call Us",
        icon: <i className="feather icon-phone" />,
        delay: "0.4s",
        para: <p>
            <Link href="tel:+97143333108" className="text-body">+971 433 33108</Link><br />
            <Link href="https://wa.me/971586585190" className="text-body">+971 58 658 5190 (WhatsApp)</Link>
        </p>,
    },
    {
        id: 3,
        title: "Send us a Mail",
        icon: <i className="feather icon-mail" />,
        delay: "0.6s",
        para: <p>
            <Link href="mailto:info@signatureplusclinic.com" className="text-body">info@signatureplusclinic.com</Link>
        </p>,
    },
    {
        id: 4,
        title: "Opening Hours",
        icon: <i className="feather icon-clock" />,
        delay: "0.8s",
        para: <p>Open Daily: 11:00 AM – 10:00 PM</p>,
    },
]