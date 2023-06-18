import { Link, useRouteError } from "react-router-dom";
 import error1 from "../../assets/images/banner/error.gif";

const Error = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-[#123821]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <p className="text-2xl font-semibold md:text-3xl">
            {error?.message}
          </p>
          <img src={error1} alt="" />
          <div>
            <Link
              to="/"
              className="px-8 py-3  font-semibold rounded text-white hover:bg-[#dabd3a]  bg-[#123821]"
            >
              Back to home page.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
