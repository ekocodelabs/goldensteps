import About from "@/myComponents/About";
import Banner from "@/myComponents/Banner";
import Contact from "@/myComponents/Contact";
import Footer from "@/myComponents/Footer";
import HomeProducts from "@/myComponents/HomeProducts";
import Navbar from "@/myComponents/Navbar";
import Services from "@/myComponents/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <HomeProducts />
      <Contact />
      <Footer />
    </>
  );
}
