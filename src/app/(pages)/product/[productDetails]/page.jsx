import { getProductDetails } from "@/api/api";
import Loading from "@/app/(componants)/loading/loading";
import SpecificCategory from "@/app/(componants)/specificCategory/specificCategory";
import Image from "next/image";
import { Suspense } from "react";

export default async function ProductDetails({ params }) {
  let { productDetails } = await params
  let itemDetails = await getProductDetails(productDetails)


  return (<>
    <Suspense fallback={<Loading />}>
      <section className="flex flex-wrap items-center w-10/12 mx-auto mt-16 gap-y-5">
        <div className="w-full lg:w-1/3 p-1">
          <Image className="w-full" src={itemDetails?.image} width={100} height={50} priority={false} loading="lazy" alt={itemDetails?.description} />
        </div>
        <div className="w-full lg:w-2/3 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-3xl font-bold">{itemDetails?.title}</h1>
          <p className="my-5 text-lg">{itemDetails?.description}</p>
          <p className="my-5 text-xl flex items-center gap-1">price : <span className="text-emerald-800 text-xl"> {itemDetails?.price}</span> $</p>
          <p className="my-5 text-lg flex items-center gap-1">category : <span className="text-emerald-800 text-xl"> {itemDetails?.category}</span></p>
        </div>
      </section>
    </Suspense>
    <div className="my-32 w-11/12 lg:w-10/12 mx-auto">
      <h2 className="text-center my-10 mb-20 italic text-5xl font-semibold text-emerald-700">More Products Like This</h2>
      <Suspense fallback={<Loading />}>
        <SpecificCategory category={itemDetails?.category} id={productDetails} />
      </Suspense>
    </div>
  </>)
}
