
const Navbar = () => {
    return (
        <div className="flex justify-between my-4 font-semibold">
            <div>
                <p>Logo</p>
            </div>
            <div className="list-none flex gap-3">
                <li>HOME</li>
                <li>Product</li>
                <li>cart 1</li>
                <li>$ 500</li>
            </div>
        </div>
    );
};

export default Navbar;