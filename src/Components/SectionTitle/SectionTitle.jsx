const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-14" data-aos="zoom-in-up" data-aos-duration="1500">
        <p className="text-[rgb(171,141,3)] text-2xl mb-2"> {subHeading}</p>
        <h3 className="text-4xl font-bold text-[#123821] uppercase border-y-4 py-4 md:text-5xl lg:text-6xl">
          {heading}
        </h3>
      </div>
    );
  };
  
  export default SectionTitle;
  