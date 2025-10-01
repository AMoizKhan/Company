import Footer from "@/Component/Footer";
import GodRays from "@/Component/GodRays";
import Header from "@/Component/Header";
import MainPage from "@/app/Home";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
   
        <MainPage />
      </div>
      <Footer/>
    </div>
  );
}
