const Footer = () => {
  return (
    <footer className="bg-[#123821] rounded-2xl text-white">
      <div className="footer p-10">
      <div>
        <p className="text-2xl font-bold">LANGUAGE CENTER</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
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
