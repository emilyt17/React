const products = [
    { 
        id: 1,
        name: 'Botas Altas - SUSY',
        decription: 'Botas de cuero - Temaporada Otoño Invierno.',
        price: "$250",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/041/114/products/veneta1-ce8a5280d50020d2f416126189454085-640-0.jpg"

    },
    {
        id: 2,
        name: 'Jeans Altos - MOM',
        decription: 'Jens anchos  - Temaporada Otoño Invierno.',
        price: "$350",
        image: "https://static.zara.net/photos///2021/S/0/1/p/1193/003/403/2/w/563/1193003403_6_1_1.jpg?ts=1624607080719"

    },
];
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(products);
    },2000)
})
function getProduct (){
    return myPromise;

}

export {
    getProduct,
}

