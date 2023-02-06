

const productsArray = [
    {
        id:"price_1MUxXXHavlLD1ExWHrycxrvN",
        title:"Eyebrow Threading",
        price:  20.00
    },
    {
        id:"price_1MUxZuHavlLD1ExWdSSiohvA",
        title:"Full Facial",
        price:  100.00
    },
    {
        id:"price_1MUxaiHavlLD1ExWnpLN7qsa",
        title:"Eyelashes",
        price:  150.00
    },
    {
        id:"price_1MUxb6HavlLD1ExW8aNkFsxh",
        title:"Brazilian Blow Out",
        price:  250.00
    },
    {
        id:"price_1MUxblHavlLD1ExWhGrelIO4",
        title:"Highlights 1/2 head",
        price: 150.00
    },
    {
        id:"price_1MUxcHHavlLD1ExWZiKcOi4V",
        title:"Highlights full head",
        price: 250.00
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };