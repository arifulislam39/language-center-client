import img from "../../assets/images/banner/class.jpg";

import ClassCard from "../../Components/ClassCard/ClassCard";

const Classes = () => {
  return (
    <div>
      <img src={img} alt="" className="w-full h-[300px] opacity-70" />{" "}
      <ClassCard>s</ClassCard>
    </div>
  );
};

export default Classes;
