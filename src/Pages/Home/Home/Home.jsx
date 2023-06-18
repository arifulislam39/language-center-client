
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      {" "}
      <Banner></Banner>
       <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    <Blog></Blog> 
      
    
    </div>
  );
};

export default Home;
