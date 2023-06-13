import Card from "./Card";
import useClass from "../../Hooks/useClass";

const ClassCard = () => {
  const [classes] = useClass();

  //console.log(classes);

  return (
    <div>
      <div className="">
        <div className="grid gap-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 mb-20">
          {classes.map((cls) => (
            <Card key={cls._id} cls={cls}></Card>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
