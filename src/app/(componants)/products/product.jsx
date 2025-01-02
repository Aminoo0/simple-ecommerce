import { getProducts } from "@/api/api";
import SearchForProducts from "../searchForProducts/searchForProducts";
import { Suspense } from "react";
import Loading from "../loading/loading";


export default async function Products() {
    let data = await getProducts()

    return (<>
        <Suspense fallback={<Loading />}>
            <SearchForProducts data={data} />
        </Suspense>
    </>)
}
