import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const {user} =useContext(AuthContext)

  const {data: history = []} = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async() => {
        const res = await axios.get(`https://language-center-server-nu.vercel.app/paymentHistory/${user?.email}`);
        return res.data;
    }
})
  return (
    <>
      <div className="mt-10">
      <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">payment history</h2>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.class_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.class_name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
