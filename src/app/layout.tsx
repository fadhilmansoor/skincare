import type { Metadata } from "next";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../public/assets/vendor/animate/animate.css'
import "../../public/assets/css/style.css";
import ScrolltoTop from "@/component/ScrolltoTop";
// import AnimationEffect from "@/layout/AnimationEffect";

export const metadata: Metadata = {
    title: "ClinicMaster - Health & Medical React Template",
    description: "ClinicMaster is a stylish Bootstrap React template designed for skincare and medical professionals. Ideal for showcasing skincare treatments, medical services, and wellness solutions with a modern, responsive design that enhances user experience and engagement.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-3">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body id="bg">        
        {children}
        <ScrolltoTop />
      </body>
    </html>
  );
}
