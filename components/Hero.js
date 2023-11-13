import Image from "next/image";
import nuts from "@/images/nuts.svg"
import nuts2 from "@/images/nuts2.png"
import coffee from "@/images/coffee.png"
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Hero = () => {
  return (
    <section className="relative w-full h-full bg-[#fae5c2]">
      <Image src={nuts} alt="nuts" priority className="absolute right-0 top-[220px] md:top-0 w-[250px] md:w-[400px] h-[300px] lg:w-[500px] lg:h-[350px]" />
        <div className="relative z-10 grid md:grid-cols-12 w-full pt-24">
            <div className="col-span-6 pb-7 md:pb-0 md:pl-4 max-w-[350px] md:max-w-[500px] m-auto">
                <h1 className="text-4xl lg:text-5xl font-bold leading-snug lg:leading-normal">Enjoy your <span className="text-[#FF902A]">coffee</span> before your activity</h1>
                <p>Boost your productivity and build your mood with a glass of coffee in the morning </p>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center justify-center bg-[#2F2105] text-white rounded-full py-3 w-44">Order Now
                  <AiOutlineShoppingCart className=" w-5 h-5 rounded-full ml-2 p-1 bg-[#FF902A]" size={15} />
                  </button>
                  <button className="bg-transparent text-[#FF902A] border-none py-2 w-32">More Menu</button>
                </div>
            </div>
            <div className="col-span-6">
                <Image src={coffee} alt="coffee" priority />
            </div>
        </div>
        <Image src={nuts2} alt="nuts" priority className="relative left-0 -top-4 md:-top-5 w-[250px] md:w-[400px] h-[300px] lg:w-[500px] lg:h-[350px]" />
    </section>
  )
}

export default Hero;