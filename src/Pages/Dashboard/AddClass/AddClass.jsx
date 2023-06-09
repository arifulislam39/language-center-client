import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-7xl mx-auto">
        <div className="text-center text-4xl">Add A Class</div>
      {/* <ToastContainer className="lg:text-3xl" />
        <Head title="ADD TOYS"></Head> */}
      <form onSubmit="">
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                name="toy_name"
                type="text"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                name="image"
                type="file"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                defaultValue=""
                type="text"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                name="rating"
                type="text"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                name="seller_name"
                type="text"
                value={user?.displayName}
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                name="seller_email"
                type="email"
                value={user?.email}
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              // onClick={notify}
              className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
