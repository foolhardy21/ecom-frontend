import { productsImgArr } from "./productsImg.data";

export const productsArr = [
    {
        id: 1,
        name: 'zoom freak 3',
        company: 'nike',
        size: [9, 10, 11],
        price: 11995,
        offerPrice: 10000,
        img: {
            srcSet: productsImgArr[0].srcSet,
            alt: productsImgArr[0].alt,
            sizes: productsImgArr[0].sizes
        },
        rating: 4,
        gender: 'male',
        quantity: 3
    },
    {
        id: 2,
        name: 'air jordan 36',
        company: 'nike',
        size: [9, 10, 11],
        price: 14995,
        img: {
            srcSet: productsImgArr[1].srcSet,
            alt: productsImgArr[1].alt,
            sizes: productsImgArr[0].sizes
        },
        rating: 5,
        gender: 'male',
        quantity: 30
    },
    {
        id: 3,
        name: 'air max 97 se',
        company: 'nike',
        size: [9, 10, 11],
        price: 9996,
        img: {
            srcSet: productsImgArr[2].srcSet,
            alt: productsImgArr[2].alt,
            sizes: productsImgArr[0].sizes
        },
        rating: 3,
        gender: 'male',
        quantity: 18
    },
    {
        id: 4,
        name: 'fontaka waffle',
        company: 'nike',
        size: [9, 10],
        price: 6778,
        offerPrice: 5000,
        img: {
            srcSet: productsImgArr[3].srcSet,
            alt: productsImgArr[3].alt,
            sizes: productsImgArr[0].sizes
        },
        rating: 4,
        gender: 'female',
        quantity: 25
    },
    {
        id: 5,
        name: 'air max 90 se',
        company: 'nike',
        size: [9, 10],
        price: 12345,
        img: {
            srcSet: productsImgArr[4].srcSet,
            alt: productsImgArr[4].alt,
            sizes: productsImgArr[0].sizes
        },
        rating: 5,
        gender: 'female',
        quantity: 20
    },
]