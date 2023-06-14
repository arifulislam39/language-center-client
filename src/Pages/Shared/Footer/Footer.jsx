import {ImFacebook2} from "react-icons/im"
import {GrInstagram} from "react-icons/gr"
import {AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
    <footer className="bg-[#123821] rounded-2xl text-white">
      <div className="footer p-10">
        <div>
          <p className="btn btn-ghost font-bold mb-4 text-2xl">
            <span className="text-6xl text-[rgb(171,141,3)] font-bold">L</span>{" "}
            ANGUAGE CENTER
          </p>
          <p className="ml-5">1234 Street Los Angeles,United States</p>
         <div className="flex ml-5 mt-10 space-x-9 text-3xl"> <ImFacebook2 /> 
          <GrInstagram />
          <AiFillTwitterSquare /></div>
        </div>
        <div>
          <span className="footer-title">Conditions</span>
          <a className="link link-hover">For Semester Courses</a>
          <a className="link link-hover">For 3-week Intensive Course</a>
          <a className="link link-hover">For Intensive Summer Courses</a>
          <a className="link link-hover">For Individual Courses</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Teachers</a>
          <a className="link link-hover">Support</a>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Blogs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>

      <div className="footer-center pb-6">
        <p>Copyright © 2023 - All right reserved by LANGUAGE CENTER</p>
      </div>
    </footer>
  );
};

export default Footer;
