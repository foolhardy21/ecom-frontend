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
        }
    },
    {
        id: 2,
        name: 'superstar south park',
        company: 'adidas',
        img: {
            srcSet: cartImgArr[1].srcSet,
            alt: cartImgArr[1].alt,
            sizes: sizes
        }
    },
]