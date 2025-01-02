'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../input/input";

export default function SearchForProducts({ data }) {
    const [search, setSearch] = useState(data)

    let filterForProduct = (e) => {
        let product = data.filter((product) => product.title.toLowerCase().includes(e.target.value))
        setSearch(product)
    }

    return (
        <div>
            <Input filterForProduct={filterForProduct} />
            <section className="flex flex-wrap gap-y-10 w-11/12 mx-auto mt-5">
                {search?.map((product) =>
                    <div key={product?.id} className="w-full md:w-2/4 lg:w-1/3 xl:w-1/4 p-5">
                        <Link href={`/product/${product?.id}`}>
                            <div className="p-3 bg-gradient-to-r from-slate-500 to-gray-200 rounded-lg flex flex-col justify-center items-center hover:scale-105 duration-300">
                                <Image src={product?.image} loading="lazy" priority={false} className="rounded-lg w-3/4 h-[300px] shadow-2xl -mt-10 border border-black hover:scale-105 duration-300" width={100} height={100} alt={product.title} />
                                <h2 className="font-bold tracking-wide text-stone-700 text-lg">{product?.title.split(' ').slice(0, 4).join(' ')}</h2>
                                <div className="flex justify-evenly w-full my-2">
                                    <h3 className="font-bold text-emerald-950">{product?.price} $</h3>
                                    <h3 className="bg-blue-300 p-1 px-3 rounded-xl font-semibold text-sm">{product?.category}</h3>
                                </div>
                                <h3 className="font-semibold">{product?.description.split(' ').slice(0, 3).join(' ')}...</h3>
                            </div>
                        </Link>
                    </div>)}
            </section>
        </div>
    )
}
