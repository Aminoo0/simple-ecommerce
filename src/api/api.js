export let getProducts = async () => {
    let res = await fetch(`https://fakestoreapi.com/products`,
        {
            cache: "no-cache"
        }
    )
    let data = res.json()
    return data
}

export let getProductDetails = async (id) => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`,
        {
            cache: "no-cache"
        }
    )
    let data = res.json()
    return data
}

export let getSpecificCategory = async (category) => {
    let res = await fetch(`https://fakestoreapi.com/products/category/${category}`,
        {
            cache: "no-cache"
        }
    )
    let data = res.json()
    return data
}