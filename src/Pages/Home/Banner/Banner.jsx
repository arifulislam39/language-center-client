
import banner4 from "../../../assets/images/banner/banner4.jpg";
import banner5 from "../../../assets/images/banner/banner5.jpg";
import banner6 from "../../../assets/images/banner/banner6.jpg";

// A79132


const Banner = () => {
  return (
    <div className="carousel w-full h-[700px]">
<div id="slide1" className="carousel-item relative w-full ">
  <img src={banner4} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 hero-overlay bg-opacity-30 bg-gradient-to-r from-[#7c8665] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl font-bold text-[#123821]">LANGUAGE CENTER</h2>
      <h3 className="text-3xl font-bold">
        A <span className="text-blue-700">unique</span> approach to learning foreign languages online
      </h3>
      <div>
        <button className="btn text-white hover:bg-[#dabd3a] mt-10 bg-[#123821]">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide3"
      className="btn bg-[#ccb035] btn-square mr-10"
    >
      ❮
    </a>
    <a href="#slide2" className="btn bg-[#ccb035] btn-square">
      ❯
    </a>
  </div>
</div>
<div id="slide2" className="carousel-item relative w-full">
  <img src={banner6} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#7c8665] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl text-[#123821] font-bold uppercase">Study language having fun!</h2>
      <h3 className="text-3xl font-bold">
       We Have The International Reputation For High Quality Teaching and Success.
      </h3>
     
      <div>
        <button className="btn text-white hover:bg-[#dabd3a] mt-10 bg-[#123821]">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide1"
      className="btn bg-[#ccb035] btn-square mr-10"
    >
      ❮
    </a>
    <a
      href="#slide3"
      className="btn bg-[#ccb035] btn-square btn-circle"
    >
      ❯
    </a>
  </div>
</div>
<div id="slide3" className="carousel-item relative w-full">
  <img src={banner5} className="w-full rounded-xl" />

  <div className="absolute rounded-xl flex items-center pl-16 h-full top-0 left-0 right-5 bottom-5 bg-gradient-to-r from-[#74ac94] to-[rgba(21, 21, 21, 0) 100%)]">
    <div className="text-white space-y-7 w-1/2">
      <h2 className="text-7xl text-[#123821] font-bold uppercase">classes now forming!</h2>
      <h3 className="text-3xl font-bold">
       Our Courses Are Taught At Beginner To Advanced Leaves On A Year Round Basis.
      </h3>
      <div>
        <button className="btn text-white hover:bg-[#dabd3a] mt-10 bg-[#123821]">
          Explore More
        </button>
      </div>
    </div>
  </div>

  <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
    <a
      href="#slide2"
      className="btn bg-[#ccb035] btn-square mr-10"
    >
      ❮
    </a>
    <a
      href="#slide1"
      className="btn bg-[#ccb035] btn-square"
    >
      ❯
    </a>
  </div>
</div>
</div>


  );
};

export default Banner;

