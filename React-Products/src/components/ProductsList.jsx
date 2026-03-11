import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

function ProductsList() {
const [products, setProducts] = useState([]);
const [backupProducts, setBackupProducts] = useState([]); // keep original
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const navigate = useNavigate();
const location = useLocation();

const queryParams = new URLSearchParams(location.search);
const search = queryParams.get("search") || "";
const category = queryParams.get("category") || "";

  // Navigate to product detail page
const gotoProduct = (productObj) => {
    navigate("/product", { state: { product: productObj } });
};

useEffect(() => {
    async function getProducts() {
    try {
        setLoading(true);
        let res = await fetch("https://fakestoreapi.com/products");

        if (res.ok) {
        const data = await res.json();
        setProducts(data);
          setBackupProducts(data); // store original list
        } else {
        throw new Error("Failed to fetch");
        }
    } catch (err) {
        setError(err);
    } finally {
        setLoading(false);
    }
    }

    getProducts();
}, []);

  // Apply filters/search when URL param changes
useEffect(() => {
    let filtered = backupProducts;

    // Search filter
    if (search !== "") {
    filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );
    }

    // Category filter
    if (category !== "") {
    filtered = filtered.filter((p) => p.category === category);
    }

    setProducts(filtered);
}, [search, category, backupProducts]);

if (loading) {
    return <p className="text-center text-2xl text-blue-500">Loading...</p>;
}

if (error) {
    return (
    <p className="text-center text-2xl text-red-500">
        {error.message}
    </p>
    );
}

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {products.map((productObj) => (
        <div
        onClick={() => gotoProduct(productObj)}
        key={productObj.id}
        className="shadow-md p-5 rounded cursor-pointer"
        >
        <img
            src={productObj.image}
            alt={productObj.title}
            className="h-40 mx-auto object-contain"
        />
        <h2 className="text-lg font-semibold mt-4 text-center">
            {productObj.title}
        </h2>
        </div>
    ))}
    </div>
);
}

export default ProductsList;