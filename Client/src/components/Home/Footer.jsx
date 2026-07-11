import React from "react";
import logo from "/logoWider.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top Section */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-1">

            <img
              src={logo}
              alt="BiteBase"
              className="w-52"
            />

            <p className="mt-5 leading-7 text-gray-400">
              Delicious food delivered to your doorstep.
              <br />
              Fast delivery, best quality, great prices.
            </p>

            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                    h-11
                    w-11
                    rounded-full
                    bg-[#1c1c1c]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#e8691a]
                    duration-300
                    cursor-pointer
                  "
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-[#e8691a] font-bold uppercase tracking-wide mb-6">
              Company
            </h3>

            <ul className="space-y-4">
              <li className="hover:text-[#e8691a] cursor-pointer">About Us</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Our Menu</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Careers</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Blog</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-[#e8691a] font-bold uppercase tracking-wide mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li className="hover:text-[#e8691a] cursor-pointer">Home</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Menu</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Cart</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Orders</li>
              <li className="hover:text-[#e8691a] cursor-pointer">Profile</li>
            </ul>
          </div>

          {/* Customer Service */}

          <div>
            <h3 className="text-[#e8691a] font-bold uppercase tracking-wide mb-6">
              Customer Service
            </h3>

            <ul className="space-y-4">
              <li className="hover:text-[#e8691a] cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-[#e8691a] cursor-pointer">
                FAQs
              </li>

              <li className="hover:text-[#e8691a] cursor-pointer">
                Shipping & Delivery
              </li>

              <li className="hover:text-[#e8691a] cursor-pointer">
                Returns
              </li>

              <li className="hover:text-[#e8691a] cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-[#e8691a] font-bold uppercase tracking-wide mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#e8691a] mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#e8691a] mt-1" />
                <span>support@bitebase.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-[#e8691a] mt-1" />
                <span>
                  123 Food Street,
                  <br />
                  Mumbai, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col gap-6 lg:flex-row justify-between items-center">

          <p className="text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} BiteBase. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-400">
            <FaHeart className="text-[#e8691a]" />
            Made with love for food lovers
          </div>

          <div className="flex gap-5 text-4xl text-white">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaApplePay />
            <FaGooglePay />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;