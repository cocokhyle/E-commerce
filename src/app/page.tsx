import Image from "next/image";

export default function Home() {
  const product = [
    { name: "Orange", price: "17" },
    { name: "Mango", price: "15" },
    { name: "Banana", price: "16" },
    { name: "Grapes", price: "18" },
  ];

  return (
    <>
      <div className="">
        {product.map((products, index) => (
          <div
            key={index}
            className="flex items-center gap-10 font-semibold bg-slate-50 group p-5"
          >
            <h1 className=" ">{products.name}</h1>
            <p>{products.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
