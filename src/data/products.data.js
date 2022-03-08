import { productsImgArr, sizes } from "./productsImg.data";

export const productsArr = [
    {
        id: 1,
        name: 'zoom freak 3',
        company: 'nike',
        size: 9,
        price: 11995,
        offerPrice: 10000,
        img: {
            srcSet: productsImgArr[0].srcSet,
            alt: productsImgArr[0].alt,
            sizes: sizes
        },
    },
    {
        id: 2,
        name: 'air jordan 36',
        company: 'nike',
        size: 10,
        price: 14995,
        img: {
            srcSet: productsImgArr[1].srcSet,
            alt: productsImgArr[1].alt,
            sizes: sizes
        },
    },
    {
        id: 3,
        name: 'air max 97 se',
        company: 'nike',
        size: 9,
        price: 9996,
        img: {
            srcSet: productsImgArr[2].srcSet,
            alt: productsImgArr[2].alt,
            sizes: sizes
        },
    },
    {
        id: 4,
        name: 'fontaka waffle',
        company: 'nike',
        size: 9,
        price: 6778,
        offerPrice: 5000,
        img: {
            srcSet: productsImgArr[3].srcSet,
            alt: productsImgArr[3].alt,
            sizes: sizes
        },
    },
    {
        id: 4,
        name: 'air max 90 se',
        company: 'nike',
        size: 10,
        price: 12345,
        img: {
            srcSet: productsImgArr[4].srcSet,
            alt: productsImgArr[4].alt,
            sizes: sizes
        },
    },
]