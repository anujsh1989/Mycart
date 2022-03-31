export const addToCart = (data) => {
    return {
        type: "Add_To_Cart",
        data: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: "Remove_From_Cart",
        data: data
    }
}