export let getProducts = async () => {
    try {
        let res = await fetch(`https://fakestoreapi.com/products`,
            {
                cache: "no-cache"
            }
        )
        let data = res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export let getProductDetails = async (id) => {
    try {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`,
            {
                cache: "no-cache"
            }
        )
        let data = res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export let getSpecificCategory = async (category) => {
    try {
        let res = await fetch(`https://fakestoreapi.com/products/category/${category}`,
            {
                cache: "no-cache"
            }
        )
        let data = res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}