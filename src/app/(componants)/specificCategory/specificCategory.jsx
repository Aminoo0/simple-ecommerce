import { getSpecificCategory } from "@/api/api"
import Slider from "../slider/slider";

export default async function SpecificCategory({ category, id }) {
    let data = await getSpecificCategory(category)
    let allWithoutOne = data.filter((product) => product.id != id)


    return (
        <div className="w-full">
            <Slider allWithoutOne={allWithoutOne} />
        </div>
    )
}
