const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-[rgb(163,134,5)] text-2xl mb-2"> {subHeading}</p>
            <h3 className="text-4xl font-bold text-[#123821] uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;