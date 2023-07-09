import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Reviews from "./components/Reviews";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Image
        alt="Mountains"
        // src={mountains}
        quality={100}
        src="/bandidasco.png"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <h1 className="z-20 mb-2 text-6xl font-bold text-custom-red">
          BandidasCo
        </h1>

        <section className="z-20 mb-8 px-4">
          <p className="text-base font-medium text-black text-center">
            Welcome to BandidasCo, the rebel of snack carts! We&apos;re not just
            any snack cart - we&apos;re the cool blast on a hot day, the
            unexpected twist at your events. We serve up frosty ice creams and
            fiery elotes, pushing the envelope of taste and excitement. Dare to
            invite us to your parties and events, and we promise to kick the
            flavor up a notch, lighting up faces with our irresistible,
            audacious treats!
          </p>
          {/* <h2 className="text-custom-brown font-bold text-7xl">
          ESTE ES EL CAFE CUSTOM
        </h2> */}
        </section>
        <div className="z-20 flex justify-center space-x-8 mb-8">
          <FaFacebook className="icon text-3xl text-custom-red" />
          <FaInstagram className="icon text-3xl text-custom-red" />
          <FaTiktok className="icon text-3xl text-custom-red" />
        </div>
        <section className="z-20 mb-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdG8ncqlPJJxMad-Yh9thbbzpof26r9ElUIoSt7VkQT-8SAMg/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 text-2xl font-bold text-white bg-custom-green shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-custom-brown focus:outline-none">
              Book Now
            </button>
          </Link>
        </section>
        {/* <Reviews /> */}
        <footer className="z-20 mt-auto pb-2 text-center text-black text-sm">
          DEPOSITS ARE NOT REFUNDABLE <br />
          &copy; {new Date().getFullYear()} BandidasCo | Developed by PAREDES
        </footer>
      </div>
    </div>
  );
}
