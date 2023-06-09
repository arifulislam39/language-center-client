import useCart from "../../../Hooks/useCart";

const MySelectedClasses = () => {
    const [cart]=useCart()
    console.log(cart);
    return (
        <div>
            <h2>my selected classes</h2>
        </div>
    );
};

export default MySelectedClasses;