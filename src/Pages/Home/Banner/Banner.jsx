import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";
import banner5 from "../../../assets/images/banner/banner5.jpg";
import banner6 from "../../../assets/images/banner/banner6.jpg";

// A79132


const Banner = () => {
  return (
    <div className="carousel w-full h-[700px]">
<div id="slide1" className="carousel-item relative w-full ">
  <img src={banner1} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 hero-overlay bg-opacity-30">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl font-bold">LANGUAGE CENTER</h2>
      <h3 className="text-4xl font-bold">
        A <span className="text-blue-700">unique</span> approach to learning foreign languages online
      </h3>
      <p>
        Learn at your own pace.with lifetime access <br />
        on mobile and desktop.
      </p>
      <div>
        <button className="btn btn-outline btn-secondary">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide6"
      className="btn bg-[#ccb035] btn-circle mr-10"
    >
      ❮
    </a>
    <a href="#slide2" className="btn bg-[#ccb035] btn-circle">
      ❯
    </a>
  </div>
</div>
<div id="slide2" className="carousel-item relative w-full">
  <img src={banner2} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl font-bold">Best Kids Store.</h2>
      <h3 className="text-4xl font-bold">
        Racing Baby Big Electric Car Jeep
      </h3>
      <p>
        The Ride on Jeep can be controlled by dual control modes. Parent
        can help your children control this jeep with 2.4G wireless remote
        controller
      </p>
      <div>
        <button className="btn bg-[]">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide1"
      className="btn btn-secondary btn-outline btn-circle mr-10"
    >
      ❮
    </a>
    <a
      href="#slide3"
      className="btn btn-secondary btn-outline btn-circle"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide3" className="carousel-item relative w-full">
  <img src={banner3} className="w-full rounded-xl" />

  <div className="absolute flex rounded-xl items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl font-bold">Best Kids Store.</h2>
      <h3 className="text-4xl font-bold">
        The Ferrari Battery Operated Ride On Car for Kids
      </h3>
      <p>
        this lookalike la ferrari ride-on toy car is easy to clean.
        Assembly required. Suitable for kids between 2 to 6 years of age
        and has a maximum weight capacity of 30kgs. Charge the battery
        according to the included instruction manual
      </p>
      <div>
        <button className="btn btn-outline btn-secondary">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide2"
      className="btn btn-secondary btn-outline btn-circle mr-10"
    >
      ❮
    </a>
    <a
      href="#slide4"
      className="btn btn-secondary btn-outline btn-circle"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide4" className="carousel-item relative w-full">
  <img src={banner4} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21) 100%)]">
    <div className="text-white space-y-6 w-1/2">
      <h2 className="lg:text-7xl font-bold">Best Kids Store.</h2>
      <h3 className="lg:text-4xl font-bold">Off Roader Kids Jeep</h3>
      <p>
        R/C Electric Motor With Rechargeable Battery Operated Ride On Jeep
        For Kids.
      </p>
      <div>
        <button className="btn btn-outline btn-secondary">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide3"
      className="btn btn-secondary btn-outline btn-circle mr-10"
    >
      ❮
    </a>
    <a
      href="#slide5"
      className="btn btn-secondary btn-outline btn-circle"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide5" className="carousel-item relative w-full">
  <img src={banner5} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-6 w-1/2">
      <h2 className="lg:text-7xl font-bold">Best Kids Store.</h2>
      <h3 className="lg:text-4xl font-bold">Off Roader Kids Jeep</h3>
      <p>
        R/C Electric Motor With Rechargeable Battery Operated Ride On Jeep
        For Kids.
      </p>
      <div>
        <button className="btn btn-outline btn-secondary">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide4"
      className="btn btn-secondary btn-outline btn-circle mr-10"
    >
      ❮
    </a>
    <a
      href="#slide6"
      className="btn btn-secondary btn-outline btn-circle"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide6" className="carousel-item relative w-full">
  <img src={banner6} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-6 w-1/2">
      <h2 className="lg:text-7xl font-bold">Best Kids Store.</h2>
      <h3 className="lg:text-4xl font-bold">Off Roader Kids Jeep</h3>
      <p>
        R/C Electric Motor With Rechargeable Battery Operated Ride On Jeep
        For Kids.
      </p>
      <div>
        <button className="btn btn-outline btn-secondary">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide5"
      className="btn btn-secondary btn-outline btn-circle mr-10"
    >
      ❮
    </a>
    <a
      href="#slide1"
      className="btn btn-secondary btn-outline btn-circle"
    >
      ❯
    </a>
  </div>
</div>
</div>


  );
};

export default Banner;

