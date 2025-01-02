
export default function Input({ filterForProduct }) {
    return (
        <div className="w-3/4 md:w-1/2 xl:w-1/4 mx-auto mb-10">
            <input onChange={filterForProduct} className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For Product By Name" />
        </div>
    )
}
