
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#123821] text-white">
      <div className="footer p-4 md:p-10">
        <div>
          <p className="btn btn-ghost font-bold mb-4 text-xl md:text-2xl">
            <span className="text-4xl md:text-6xl text-[rgb(171,141,3)] font-bold">
              L
            </span>{" "}
            ANGUAGE CENTER
          </p>
          <p className="ml-2 md:ml-5">1234 Street, Los Angeles, United States</p>
          <div className="flex ml-6 mt-6 md:mt-10 space-x-6 md:space-x-9 text-2xl md:text-3xl">
            <ImFacebook2 />
            <GrInstagram />
            <AiFillTwitterSquare />
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <span className="footer-title">Conditions</span>
          <a className="link link-hover block mt-2">For Semester Courses</a>
          <a className="link link-hover block mt-2">For 3-week Intensive Course</a>
          <a className="link link-hover block mt-2">For Intensive Summer Courses</a>
          <a className="link link-hover block mt-2">For Individual Courses</a>
        </div>
        <div className="mt-8 md:mt-0">
          <span className="footer-title">Company</span>
          <a className="link link-hover block mt-2">Careers</a>
          <a className="link link-hover block mt-2">Teachers</a>
          <a className="link link-hover block mt-2">Support</a>
        </div>
        <div className="mt-8 md:mt-0">
          <span className="footer-title">Product</span>
          <a className="link link-hover block mt-2">Courses</a>
          <a className="link link-hover block mt-2">Blogs</a>
        </div>
        <div className="mt-8 md:mt-0">
          <span className="footer-title">Legal</span>
          <a className="link link-hover block mt-2">Terms of use</a>
          <a className="link link-hover block mt-2">Privacy policy</a>
          <a className="link link-hover block mt-2">Cookie policy</a>
        </div>
      </div>

      <div className="footer-center pb-4 md:pb-6">
        <p className="text-xs md:text-base">
          &copy; {new Date().getFullYear()} - All rights reserved by LANGUAGE CENTER and design by Ariful Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;

