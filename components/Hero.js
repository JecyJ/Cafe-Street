import Image from "next/image";
import nuts from "@/images/nuts.svg"
import nuts2 from "@/images/nuts2.png"
import coffee from "@/images/coffee.png"
import { Button } from "react-bootstrap";


const Hero = () => {
  return (
    <section className="w-full h-full bg-[#fae5c2]">
        <Image src={nuts} alt="nuts" priority className="absolute right-0" />
        <div className="relative z-50 grid md:grid-cols-12 w-full pt-24">
            <div className="col-span-6 pb-7 md:pb-0">
                <h1 className="text-4xl font-bold">Enjoy your <span className="text-[#FF902A]">coffee</span> before your activity</h1>
                <p>Boost your productivity and build your mood with a glass of coffee in the morning </p>
                <div className="space-x-3">
                  <button className="bg-[#2F2105] text-white rounded-3xl py-2 w-32">Order Now</button>
                  <button className="bg-transparent text-[#FF902A] border-none py-2 w-32">More Menu</button>
                </div>
            </div>
            <div className="col-span-6">
                <Image src={coffee} alt="coffee" priority />
            </div>
        </div>
        <Image src={nuts2} alt="nuts" priority className="" />
    </section>
  )
}

export default Hero;