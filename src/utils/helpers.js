export const formatPrice = (price) => {
    price=Math.ceil(price*70)
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "INR",
    }).format(price);
}