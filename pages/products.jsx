import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Hoodie",
    harga: "Rp 85.000",
    images: "/images/hoodie.png",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque
            laborum sunt voluptatum eius! Adipisci temporibus tempore provident,
            eum officiis, rem hic odio eaque laudantium odit laborum ut,
            asperiores error.`,
  },
  {
    id: 2,
    name: "Baju Labelling Wanita",
    harga: "Rp 105.000",
    images: "/images/baju-labelling.png",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem('password');
  window.location.href="/login";
};

    return (
      <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10" onClick={handleLogout}>
          {email}
          <Button classname="ml-5 bg-slate-800 hover:bg-yellow-500">Logout</Button>
        </div>
        <div className="flex justify-center py-5">
          {products.map((products) => (
            <CardProduct key={products.id}>
              <CardProduct.Header images={products.images} />
              <CardProduct.Body name={products.name}>
                {products.description}
              </CardProduct.Body>
              <CardProduct.Footer harga={products.harga} />
            </CardProduct>
          ))}
        </div>
      </Fragment>
    );
};

export default ProductsPage;