
import { useLocation } from "react-router"

function Product() {
    const {state}=useLocation()
    console.log(state?.product)

  return (
    <div className="flex flex-col sm:flex-row justify-between mt-14">
        <div className="w-2/5 mt-14">
            <img src={state?.product?.image} className="w-full" alt="" />
        </div><div className="w-3/5 p-2 sm:p-14">
            <h1 className="text-3xl font-bold">{state?.product?.title}</h1>
            <p className="text-xl text-gray-500 mt-4">{state?.product?.description}</p>
            <p className="text-2xl font-semibold mt-4">${state?.product?.price}</p>
            <p className="text-2xl font-semibold mt-4">${state?.product?.category}</p>

        </div>

    </div>
  )
}

export default Product