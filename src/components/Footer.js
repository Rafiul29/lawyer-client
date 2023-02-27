import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import {
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import CopyRigt from "./CopyRigt";


const Footer = () => {
  return (
    <>
    <div className="footer py-10 bg-gray-900 text-gray-100">
      <div className="footer-wrapper">
        <div className="footer-cta flex  justify-between items-center">
          <div className="single-cta flex flex-row gap-3">
            <GoLocation className="text-4xl  text-orange-500" />
            <div className="cta-text flex flex-col gap-1">
              <h2 className="text-2xl">Find us</h2>
              <span className="text-sm text-gray-500">
                1010 Avenue, sw 54321, chandigarh
              </span>
            </div>
          </div>
          <div className="single-cta flex flex-row gap-3">
            <IoIosCall className="text-4xl  text-orange-500" />
            <div className="cta-text">
              <h2 className="text-2xl">Call us</h2>
              <span className="text-sm text-gray-500">9876543210 0</span>
            </div>
          </div>
          <div className="single-cta flex flex-row gap-3">
            <AiOutlineMail className="text-4xl  text-orange-500" />
            <div className="cta-text">
              <h2 className="text-2xl">Mail us</h2>
              <span className="text-sm text-gray-500">mail@info.com</span>
            </div>
          </div>
        </div>
        <hr className="border border-gray-500 mt-10" />

        <div className="middle py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="footer-widget flex flex-col gap-6 ">
            <div className="footer-logo">
              <img
                src="https://i.ibb.co/QDy827D/ak-logo.png"
                alt="footer-logo"
                className="w-80 h-20"
              />
            </div>
            <div className="footer-text">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do <br /> eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div
              className="footer-social-icon flex flex-col
             gap-5"
            >
              <span className="text-2xl font-semibold">Follow us</span>
              <div className="icons flex flex-row gap-5 ">
                <BsFacebook className="text-4xl text-orange-500" />
                <AiFillTwitterCircle className="text-4xl text-orange-500 " />
                <AiFillLinkedin className="text-4xl text-orange-500" />
              </div>
            </div>
          </div>

          <div className="footer-widget flex flex-col gap-10 ">
            <div className="footer-header">
              <h2 className="text-2xl font-semibold">
                <span className="border-b-4  border-orange-500 ">Useful</span>{" "}
                Links
              </h2>
            </div>
            <div className="footer-links grid grid-cols-2 gap-10  text-gray-500">
              <div className="one flex flex-col gap-5">
                {" "}
                <Link>Home</Link>
                <Link>Services</Link>
                <Link>contact</Link>
                <Link>Ourservice</Link>
                <Link>contact Us</Link>
              </div>

              <div className="one flex flex-col gap-5">
                <Link>About</Link>
                <Link>Portfolio</Link>
                <Link>About Us</Link>
                <Link>Expert Team</Link>
                <Link>Latest News</Link>
              </div>
            </div>
          </div>

          <div className="footer-widget flex flex-col gap-10">
            <div className="footer-header">
              <h2 className="text-2xl font-semibold">
                <span className="border-b-4  border-orange-500">Subs</span>cribe
              </h2>
            </div>
            <div className="footer-text text-gray-500">
              <p>
                Don't miss to subscribe to our new feeds, kindly fill the form
                below
              </p>
            </div>
            <div className="subscription-box flex flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email adddress"
                className="p-5 outline-none bg-gray-800 w-full"
              />
              <button type="submit" className="bg-orange-500 p-5 right-0 -top-2">
                <FaLocationArrow className="text-2xl"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CopyRigt/>
    </>
  );
};

export default Footer;
