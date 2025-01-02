import { getProducts } from "@/api/api";

export async function generateMetadata({ params }) {
    let { productDetails } = await params
    let product = await getProducts()
    let meta = product.filter((product) => product.id == productDetails)

    return {
        title: meta[0].title,
        description: meta[0].description
    }
}

export default async function Layout({ children }) {

    return (
        <div className="mt-32">
            {children}
        </div>
    );
}
