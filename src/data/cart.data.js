import { cartImgArr, sizes } from './cartImg.data'

export const cartItmArr = [
    {
        id: 1,
        name: 'air max pre day',
        company: 'nike',
        img: {
            srcSet: cartImgArr[0].srcSet,
            alt: cartImgArr[0].alt,
            sizes: sizes
        },
        size: 9,
        quantity: 1,
        price: 11789,
        offerPrice: 10000
    },
    {
        id: 2,
        name: 'superstar south park',
        company: 'adidas',
        img: {
            srcSet: cartImgArr[1].srcSet,
            alt: cartImgArr[1].alt,
            sizes: sizes
        },
        quantity: 1,
        size: 9,
        price: 14399,
    },
]