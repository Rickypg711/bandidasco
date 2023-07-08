import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function page() {
  return (
    <div className="text-center text-custom-red text-7xl">
      <h1 className="">BandidasCo</h1>

      <div className="flex justify-center space-x-4 mt-4">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTiktok className="icon" />
      </div>
      <section>
        {/* <h2>About</h2> */}
        <p className="text-lg">
          Welcome to BandidasCo, the rebel of snack carts! We&apos;re not just
          any snack cart - we&apos;re the cool blast on a hot day, the
          unexpected twist at your events. We serve up frosty ice creams and
          fiery elotes, pushing the envelope of taste and excitement. Dare to
          invite us to your parties and events, and we promise to kick the
          flavor up a notch, lighting up faces with our irresistible, audacious
          treats!
        </p>
      </section>
      <section>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdG8ncqlPJJxMad-Yh9thbbzpof26r9ElUIoSt7VkQT-8SAMg/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-2 bg-custom-green text-white rounded-full transition duration-500 ease-in-out  hover:ring-4 hover:ring-yellow-500 focus:outline-none">
            Join the Snack Revolution
          </button>
        </Link>
      </section>

      {/* <section>
        <h2>Contact</h2>
        <form className="w-full max-w-lg mx-auto">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="text"
              name="email"
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
          <label className="block mb-2">
            Message:
            <textarea
              name="message"
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="bg-custom-red text-white rounded px-4 py-2 mt-4"
          />
        </form>
      </section> */}
      <span className="text-black">DEPOSITS ARE NOT REFUNDABLE</span>
    </div>
  );
}
